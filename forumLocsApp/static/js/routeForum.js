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

                .state('home', {
                    url: '/',
                    reload: true
                })

                // HOME STATES AND NESTED VIEWS ========================================
                .state('profile', {
                    url: '/profile',
                    templateUrl: '/static/templates/profile.html',
                    controller: 'ProfileController',
                    reload: true
                })

                .state('create-subject', {
                    url: '/create-subject',
                    templateUrl: '/static/templates/subject/create-subject.html',
                    controller: 'CreateSubjectController',
                    controllerAs: 'createSubject'

                })

               .state('show-subject', {
                    url:'/subject/:idSubject/:idPage',
                    templateUrl: '/static/templates/subject/subject.html',
                    controller: 'ShowSubjectController',
                    controllerAs: 'showSubject'
                })

                // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                .state('about', {
                    // we'll get to this in a bit
                });

        });
})();