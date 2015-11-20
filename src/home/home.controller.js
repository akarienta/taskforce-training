(function() {
    'use strict';

    angular
        .module('tf-training')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;

        vm.title = 'Hello Gulp!';
    }
})();
