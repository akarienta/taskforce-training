(function () {
    'use strict';

    angular
        .module('tf-training.about', [
            'ui.router'
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            controller: 'AboutController',
            controllerAs: 'vm',
            templateUrl: 'about/about.html'
        });
    }

})();
