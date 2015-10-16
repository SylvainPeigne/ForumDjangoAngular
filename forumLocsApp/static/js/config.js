/**
 * Created by sylflo on 10/16/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'Config', [])
        .config(config);

    /**
     * @name config
     * @desc Enable HTML5 routing
     */
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }

})();