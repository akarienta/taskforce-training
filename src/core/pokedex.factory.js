(function () {
    'use strict';

    angular
        .module('tf-training.core')
        .factory('PokedexService', PokedexService);

    function PokedexService($http, $log) {
        var service = {
            getPokemons: getPokemons
        };

        return service;

        ////////////

        function getPokemons() {
            return $http
                .get('http://pokeapi.co/api/v1/pokedex/1')
                .then(function (response) {
                    $log.info('PokedexService.getPokemons() - Success');
                    var pokemons = response.data.pokemon;
                    pokemons.forEach(__addId);
                    return pokemons;
                }, function (response) {
                    $log.error('PokedexService.getPokemons() - Error', response.data)
                });
        }

        ////////////

        function __addId(pokemon) {
            pokemon.id = parseInt(pokemon.resource_uri.split('/')[3]);
        }
    }

})();