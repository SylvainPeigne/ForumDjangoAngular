/**
 * Created by sylflo on 10/16/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'Users', [NAME + 'UsersControllers', NAME + 'UsersServices']);

    angular.module(NAME + 'UsersControllers', []);
    angular.module(NAME + 'UsersServices', ['ngStorage',]);
})();