var app = angular.module('app', []);

app.controller('MyCtrl', function ($scope) {

    $scope.author = {
        'name': 'Daniel Garcia',
        'title': 'Full Stack Developer',
        'company': 'Mexicoder'
    }

});
