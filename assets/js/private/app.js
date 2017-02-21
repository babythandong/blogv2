var myApp = angular.module('myApp', ['ngRoute', 'ngFileUpload']);
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/users', {
            templateUrl: '/views/users/index.html',
            controller: 'UserCtrl'
        })
        .when('/users/add', {
            templateUrl: '/views/users/add.html',
            controller: 'UserAddCtrl'
        })
        .when('/users/edit/:id', {
            templateUrl: '/views/users/edit.html',
            controller: 'UserEditCtrl'
        })
        .when('/categories', {
            templateUrl: '/views/categories/index.html',
            controller: 'CateCtrl'
        })
        .when('/categories/add', {
            templateUrl: '/views/categories/add.html',
            controller: 'CateAddCtrl'
        })
        .when('/categories/edit/:id', {
            templateUrl: '/views/categories/edit.html',
            controller: 'CateEditCtrl'
        })
        .when('/posts', {
            templateUrl: '/views/posts/index.html',
            controller: 'PostCtrl'
        })
        .when('/posts/add', {
            templateUrl: '/views/posts/add.html',
            controller: 'PostAddCtrl'
        })
        .when('/posts/edit/:id', {
            templateUrl: '/views/posts/edit.html',
            controller: 'PostEditCtrl'
        })
});
myApp.directive('ngFiles', ['$parse', function($parse) {

    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function(event) {
            onChange(scope, { $files: event.target.files });
        });
    };

    return {
        link: fn_link
    }
}])