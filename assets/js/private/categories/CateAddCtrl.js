angular.module('myApp').controller('CateAddCtrl', function($scope, $http) {
    $scope.runCreate = function() {
        $http.post('/categories/add', { name: $scope.name, description: $scope.description }).then(function(response) {
            console.log('Category is created');
        }).catch(function(err) {
            console.log('Error: ' + err);
        })
        window.location = '/categories';
    }

});