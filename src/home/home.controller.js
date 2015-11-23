(function () {
    'use strict';

    angular
        .module('tf-training.home')
        .controller('HomeController', HomeController);

    function HomeController(PokedexService) {

        // private fields
        var vm = this;

        // fields
        vm.pokemons = PokedexService.getPokemons();

    }

})();