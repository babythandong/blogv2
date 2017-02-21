angular.module('myApp').controller('UserEditCtrl', function($scope, $http, $routeParams) {
    $http.get('/getdetailUser/' + $routeParams.id).then(function(response) {
        $scope.user = response.data[0];
    }).catch(function(err) {
        console.log('Not found user');
    });
    $scope.runEdit = function() {
        $http.post('/editUser/' + $routeParams.id, { name: $scope.user.name, username: $scope.user.username, email: $scope.user.email }).then(function(response) {
            console.log('Update successs!');

        }).catch(function(err) {
            console.log('Error: ' + err);
        });
        window.location = '/users';
    }
});