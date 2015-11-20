(function () {
    'use strict';

    angular
        .module('tf-training.error')
        .controller('ErrorController', ErrorController);

    function ErrorController($location) {

        // private fields
        var vm = this;
        var url = $location.path();

        // fields
        vm.errorCode = url.split('/')[2];

    } // controller function end

})(); // closure function end