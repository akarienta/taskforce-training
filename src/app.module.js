(function () {
    'use strict';

    angular
        .module('tf-training', [
            'ui.router',
            'mm.foundation',
            'tf-training.core',
            'tf-training.home',
            'tf-training.about',
            'tf-training.error',
            'tf-training.detail'
        ])
        .config(config);

    function config($urlRouterProvider) {
        $urlRouterProvider
            .when('', '/home')
            .otherwise('/error/404');
    }

})();
