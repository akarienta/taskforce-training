(function () {
    'use strict';

    angular
        .module('tf-training.error', [
            'ui.router'
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('403', {
                url: '/error/403',
                controller: 'ErrorController',
                controllerAs: 'vm',
                templateUrl: 'error/error.html'
            })
            .state('404', {
                url: '/error/404',
                controller: 'ErrorController',
                controllerAs: 'vm',
                templateUrl: 'error/error.html'
            });
    }

})();
