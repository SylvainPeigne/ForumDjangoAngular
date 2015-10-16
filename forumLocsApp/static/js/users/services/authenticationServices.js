/**
 * Created by sylflo on 10/16/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'UsersServices')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$http'];

    function Authentication($http) {

        var Authentication = {
            login: login
        };

        return Authentication;

        function login(username, password) {

            return $http.post('/api-auth/login/', {

                username: username,
                password: password
            })
        }
    }
})();