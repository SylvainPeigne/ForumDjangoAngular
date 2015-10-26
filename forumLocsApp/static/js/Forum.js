/**
 * Created by sylflo on 10/16/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME,
        [
            'ui.router',
            'ui.bootstrap',
            'ngCookies',
            'ui.bootstrap.tpls',
            NAME + 'Config',
            NAME + 'Routes',
            NAME + 'Users',
            NAME + 'Subjects'

        ])
        .run(run);

    run.$inject = ['$http'];
    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();




