(function () {
    'use strict';

    angular
        .module('tf-training.home', [
            'ui.router',
            'tf-training.core'
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: 'home/home.html'
        });
    }

})();
