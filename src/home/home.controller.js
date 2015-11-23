(function() {
    'use strict';

    angular
        .module('tf-training.home')
        .controller('HomeController', HomeController);

    function HomeController(PokedexService) {

        // private fields
        var vm = this;

        // fields
        vm.pokemons = [];

        __init();

        ////////////

        /** @private */
        function __init() {
            PokedexService.getPokemons().then(function(data) {
               vm.pokemons = data;
            });
        }

    } // controller function end

})(); // closure function end