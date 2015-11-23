(function () {
    'use strict';

    angular
        .module('tf-training.core')
        .controller('CoreController', CoreController);

    function CoreController(PokedexService) {

        // private fields
        var vm = this;

        // fields
        vm.loaded = false;

        __init();

        ////////////

        function __init() {
            PokedexService.getLoadedPromise()
                .then(function () {
                    vm.loaded = true;
                });
        }

    }

})();