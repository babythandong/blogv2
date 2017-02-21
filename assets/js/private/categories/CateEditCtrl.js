angular.module('myApp').controller('CateEditCtrl', function($scope, $http, $routeParams) {
    $http.get('/getCategory/' + $routeParams.id).then(function(response) {
        $scope.category = response.data;
        console.log(response.data);
    });
    $scope.runEdit = function() {
        $http.post('/categories/edit/' + $routeParams.id, { name: $scope.category.name, description: $scope.category.description }).then(function(response) {
            console.log('Update success');

        }).catch(function(err) {
            console.log('Error: ' + err);
        })
        window.location = '/categories';
        console.log('Edit full......');
    }
});