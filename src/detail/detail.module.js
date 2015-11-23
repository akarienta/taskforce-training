(function () {
    'use strict';

    angular
        .module('tf-training.detail', [
            'ui.router',
            'tf-training.core'
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('detail', {
                url: '/detail',
                controller: 'DetailController',
                controllerAs: 'vm',
                templateUrl: 'detail/detail.html'
            }).state('detail_id', {
                url: '/detail/{id:int}',
                controller: 'DetailController',
                controllerAs: 'vm',
                templateUrl: 'detail/detail.html'
            });
    }

})();
