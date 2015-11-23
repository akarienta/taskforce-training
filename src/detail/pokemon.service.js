(function () {
    'use strict';

    angular
        .module('tf-training.detail')
        .factory('PokemonService', PokemonService);

    function PokemonService($http, $log) {
        var service = {
            getPokemon: getPokemon
        };

        return service;

        ////////////

        function getPokemon(id) {
            return $http
                .get('http://pokeapi.co/api/v1/pokemon/' + id)
                .then(function (response) {
                    $log.info('PokemonService.getPokemon(' + id + ') - Success');
                    return response.data;
                }, function (response) {
                    $log.error('PokemonService.getPokemon(' + id + ') - Error', response.data)
                });
        }

    }

})();