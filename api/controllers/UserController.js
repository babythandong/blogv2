/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Passwords = require('machinepack-passwords');
module.exports = {
    signup: function(req, res) {
        Passwords.encryptPassword({
            password: req.param('password'),
            difficulty: 10
        }).exec({
            error: function(err) {
                return res.negotiate(err);
            },
            success: function(encryptedPassword) {
                require('machinepack-gravatar').getImageUrl({
                    emailAddress: req.param('email')
                }).exec({
                    error: function(err) {
                        return res.negotiate(err);
                    },
                    success: function(gravatarUrl) {
                        User.create({
                            name: req.param('name'),
                            username: req.param('username'),
                            email: req.param('email'),
                            password: encryptedPassword,
                            gravatarUrl: gravatarUrl
                        }, function(err, newUser) {
                            if (err) return err;
                            console.log('Create success');
                            return res.json(newUser);
                        })
                    }
                })
            }
        })
    },
    login: function(req, res) {
        User.findOne({ username: req.param('username') }, function(err, user) {
            if (err) return err;
            if (!user) {
                return res.notFound();
            } else {
                Passwords.checkPassword({
                    passwordAttempt: req.param('password'),
                    encryptedPassword: user.password
                }).exec({
                    error: function(err) {
                        return res.negotiate(err);
                    },
                    incorrect: function() {
                        console.log('Not found');
                    },
                    success: function() {
                        req.session.me = user.id;
                        console.log('Login success width id: ' + req.session.me);
                        return res.ok();
                    }
                })
            }
        })
    },
    getAllUser: function(req, res) {
        User.find({}, {}, function(err, users) {
            if (err) return err;
            return res.json(users);
        })
    },
    getUserById: function(req, res) {
        var id = req.params.id;
        User.findById(id, function(err, user) {
            if (err) return err;
            if (!user) {
                return res.notFound();
            } else {
                return res.json(user);
                console.log('Data: ' + user);
            }
        })
    },
    edit: function(req, res) {
        var id = req.param('id');
        User.update({ id: id }, { name: req.param('name'), username: req.param('username'), email: req.param('email') }, function(err, user) {
            if (err) return err;
            console.log('Updated....');
            return res.send(user);
        })
    },
    delete: function(req, res) {
        var id = req.param('id');
        User.destroy({ id: id }).exec(function(err, success) {
            if (err) return res.negotiate(err);
            console.log('Delete success');
            return res.ok();
        })
    }
};