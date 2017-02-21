angular.module('myApp').controller('UserCtrl', function($scope, $http) {
    $http.get('/getAlluser').then(function(response) {
        $scope.users = response.data;
    }).catch(function(err) {
        console.log('Error: ' + err);
    });
    $scope.remove = function(id) {
        $http.delete('/delete/' + id).then(function(response) {
            console.log('Delete success');
        }).catch(function(err) {
            console.log('Error: ' + err);
        });
        window.location = '/users';
    }
});