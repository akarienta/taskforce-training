(function () {
    'use strict';

    angular
        .module('tf-training.core')
        .filter('first2upper', first2upper);

    function first2upper() {
        return function(input) {
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
    }

})();