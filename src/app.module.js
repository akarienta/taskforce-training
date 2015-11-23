(function () {
    'use strict';

    angular
        .module('tf-training', [
            'ui.router',
            'tf-training.core',
            'tf-training.home',
            'tf-training.about',
            'tf-training.error'
        ])
        .config(config);

    function config($urlRouterProvider) {
        $urlRouterProvider
            .when('/', '/home')
            .otherwise('/error/404');
    }

})();
