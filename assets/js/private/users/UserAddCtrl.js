angular.module('myApp').controller('UserAddCtrl', function($scope, $http) {
    $scope.runCreate = function() {
        console.log('Add User.....');
        $http.post('/signup', { name: $scope.name, username: $scope.username, email: $scope.email, password: $scope.password }).then(function(response) {
            console.log('User is added...');
            window.location = '/users';
        }).catch(function(err) {
            console.log('Error: ' + err);
        });
    }
});