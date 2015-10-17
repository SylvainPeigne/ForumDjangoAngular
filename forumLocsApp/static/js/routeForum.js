/**
 * Created by sylflo on 10/16/15.
 */

(function () {
    'use strict';

    angular
        .module(NAME + 'Routes', [])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider

                // HOME STATES AND NESTED VIEWS ========================================
                .state('login', {
                    url: '/login',
                    templateUrl: '/static/templates/partial-home.html',
                    controller: 'LoginController'
                })

                // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                .state('about', {
                    // we'll get to this in a bit
                });

        });
})();