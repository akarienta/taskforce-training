(function () {
    'use strict';

    angular
        .module('tf-training')
        .controller('HomeController', HomeController);

    function HomeController($scope) {
        $scope.title = 'Hello Gulp!';
    }
})();
