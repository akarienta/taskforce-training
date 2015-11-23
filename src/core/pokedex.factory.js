(function () {
    'use strict';

    angular
        .module('tf-training.core')
        .factory('PokedexService', PokedexService);

    function PokedexService($q, $http, $log) {
        var loaded = $q.defer();
        var data = {};

        var service = {
            getLoadedPromise: getLoadedPromise,
            getPokemons: getPokemons
        };

        __init();

        return service;

        ////////////

        function getLoadedPromise() {
            return loaded.promise;
        }

        function getPokemons() {
            return data.pokemons;
        }

        ////////////

        function __init() {
            __loadPokemons()
                .then(function () {
                    loaded.resolve();
                })
        }

        function __loadPokemons() {
            return $http
                .get('http://pokeapi.co/api/v1/pokedex/1')
                .then(function (response) {
                    $log.info('PokedexService.getPokemons() - Success');
                    data.pokemons = response.data.pokemon;
                    data.pokemons.forEach(__addId);
                }, function (response) {
                    $log.error('PokedexService.getPokemons() - Error', response.data)
                });
        }

        function __addId(pokemon) {
            pokemon.id = parseInt(pokemon.resource_uri.split('/')[3]);
        }
    }

})();