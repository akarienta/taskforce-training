(function () {
    'use strict';

    angular
        .module('tf-training.detail')
        .controller('DetailController', DetailController);

    function DetailController($stateParams, PokedexService, PokemonService) {

        // private fields
        var vm = this;

        // fields
        vm.loaded = angular.isDefined($stateParams.id) ? false : true;
        vm.pokemons = PokedexService.getPokemons();
        vm.selectedPokemon = {};
        vm.pokemonDetail = {};

        // methods
        vm.loadPokemon = loadPokemon;
        vm.isPokemonSelected = isPokemonSelected;

        loadPokemon();

        ////////////

        function loadPokemon() {
            vm.loaded = false;
            var id = isPokemonSelected() ? vm.selectedPokemon.id : $stateParams.id;

            if (angular.isUndefined(id)) {
                return;
            }

            PokemonService.getPokemon(id)
                .then(function (data) {
                    if (!isPokemonSelected()) {
                        vm.selectedPokemon = vm.pokemons[id - 1];
                    }
                    vm.pokemonDetail = data;
                }).finally(function () {
                    vm.loaded = true;
                });
        }

        function isPokemonSelected() {
            return !angular.equals({}, vm.selectedPokemon);
        }
    }

})();