/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': {
        view: 'homepage'
    },
    'GET /signup': { view: 'signup' },
    'POST /signup': 'UserController.signup',
    'GET /login': { view: 'login' },
    'POST /login': 'UserController.login',
    '/dashboard': 'DashController.index',
    'GET /users': { view: 'index' },
    'GET /users/add': { view: 'index' },
    'GET /users/edit/:id': { view: 'index' },
    '/getAlluser': 'UserController.getAllUser',
    '/getdetailUser/:id': 'UserController.getUserById',
    '/editUser/:id': 'UserController.edit',
    'delete /delete/:id': 'UserController.delete',
    'GET /categories': { view: 'index' },
    'GET /categories/add': { view: 'index' },
    'GET /categories/edit/:id': { view: 'index' },
    'POST /categories/add': 'CategoryController.create',
    'GET /getAll': 'CategoryController.getAll',
    'put /delete/:id': 'CategoryController.delete',
    '/getCategory/:id': 'CategoryController.getCategoryById',
    'POST /categories/edit/:id': 'CategoryController.editCategory',
    'GET /posts': { view: 'index' },
    'GET /posts/add': { view: 'index' },
    'GET /posts/edit/:id': { view: 'index' },
    '/upload-file': { view: 'uploadfile' },
    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};