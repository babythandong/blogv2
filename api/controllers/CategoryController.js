/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function(req, res) {
        Category.create({ name: req.param('name'), description: req.param('description') }, function(err, category) {
            if (err) {
                return res.negotiate(err);
            }
            return res.json(category);
        })
    },
    getAll: function(req, res) {
        Category.find({}, {}, function(err, categories) {
            if (err) {
                return res.negotiate(err);
            }
            return res.json(categories);
        })
    },
    delete: function(req, res) {
        Category.destroy({ id: req.param('id') }).exec(function(err, destroyed) {
            if (err) {
                return res.negotiate(err);
            }
            console.log('Delete success');
            return res.ok();
        })
    },
    getCategoryById: function(req, res) {
        Category.findOne({ id: req.param('id') }, function(err, category) {
            if (err) {
                return res.negotiate(err);
            }
            if (!category) {
                return res.notFound();
            } else {
                return res.json(category);
            }
        });
    },
    editCategory: function(req, res) {
        Category.update({ id: req.param('id') }, { name: req.param('name'), description: req.param('description') }, function(err, updateUser) {
            if (err) return err;
            console.log('Update success...');
            return res.json(updateUser);
        })
    }
};