angular.module('LoginMod').controller('LoginCtrl', function($scope, $http) {
    $scope.runLogin = function() {
        $http.post('/login', { username: $scope.username, password: $scope.password }).then(function(response) {
            console.log('Login success');
            window.location = '/dashboard';
        }).catch(function(err) {
            console.log('Error: ' + err);
        })
    }
});