(function() {
    'use strict';

    angular
        .module('tf-training.about')
        .controller('AboutController', AboutController);

    function AboutController() {

        // private fields
        var vm = this;

        // fields
        vm.version = '1.0.0';

    } // controller function end

})(); // closure function end