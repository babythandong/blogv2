angular.module('myApp').controller('CateCtrl', function($scope, $http) {
    $http.get('/getAll').then(function(response) {
        $scope.categories = response.data;
    });
    $scope.remove = function(id) {
        $http.put('/delete/' + id).then(function(response) {
            console.log('Delete success!!!');
        }).catch(function(err) {
            console.log('Error: ' + err);
        });
        window.location = '/categories';
    }
});