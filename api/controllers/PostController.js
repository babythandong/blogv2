/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        Post.create({ title: req.param('title'), intro: req.param('intro'), body: req.param('body'), category: req.param('category') }, function(req, post) {
            if (err) {
                return res.negotiate(err);
            }
            console.log('Post is created..');
            return res.json(post);
        })
    },
};