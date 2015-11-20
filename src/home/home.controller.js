(function() {
    'use strict';

    angular
        .module('tf-training.home')
        .controller('HomeController', HomeController);

    function HomeController($location, $log) {

        // private fields
        var vm = this;
        var one = 1;
        var two = '1';

        // fields
        vm.title = 'Hello Gulp!';
        vm.location = $location;

        // methods
        vm.getSum = getSum;

        ////////////

        function getSum() {
            __log('Value comparsion: ' + (one === two));
            return one + two;
        }

        ////////////

        /** @private */
        function __log(msg) {
            $log.info('--- ' + msg);
        }

    } // controller function end

})(); // closure function end