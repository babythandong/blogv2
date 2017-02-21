angular.module('SignupMod').controller('SignupCtrl', function($scope, $http) {
    $scope.runSignup = function() {
        console.log('Signup....');
        $http.post('/signup', { name: $scope.name, username: $scope.username, email: $scope.email, password: $scope.password }).then(function(response) {
            console.log('Created...');
            window.location = "/login";
        }).catch(function(err) {
            console.log('Error: ' + err);
        })
    }
});