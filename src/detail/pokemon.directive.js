(function() {
    'use strict';

    angular
        .module('tf-training.detail')
        .directive('pokemon', pokemon);

    function pokemon() {
        var dir = {};

        dir.restrict = 'E';
        dir.replace = true;
        dir.templateUrl = 'detail/pokemon.html';
        dir.scope = {
            data: '='
        };

        return dir;
    }

})();