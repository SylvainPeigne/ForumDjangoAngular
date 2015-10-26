/**
 * Created by sylflo on 10/16/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'UsersServices')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$http', '$cookies'];

    function Authentication($http, $cookies) {

        var Authentication = {
            login: login,
            logout: logout,

            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            setAuthenticatedAccount: setAuthenticatedAccount,
            unauthenticate: unauthenticate
        };

        return Authentication;

        function login(username, password) {

            return $http.post('/api/auth/login/', {

                username: username,
                password: password
            })
        }

        function logout() {
            return $http.post('/api/auth/logout/', {});
        }

        /**
         * @name getAuthenticatedAccount
         * @desc Return the currently authenticated account
         * @returns {object|undefined} Account if authenticated, else `undefined`
         * @memberOf thinkster.authentication.services.Authentication
         */
        function getAuthenticatedAccount() {
            if (!$cookies.authenticatedAccount) {
                return;
            }

            return JSON.parse($cookies.authenticatedAccount);
        }

        /**
         * @name isAuthenticated
         * @desc Check if the current user is authenticated
         * @returns {boolean} True is user is authenticated, else false.
         * @memberOf thinkster.authentication.services.Authentication
         */
        function isAuthenticated() {
            return !!$cookies.authenticatedAccount;
        }

        /**
         * @name setAuthenticatedAccount
         * @desc Stringify the account object and store it in a cookie
         * @param {Object} user The account object to be stored
         * @returns {undefined}
         * @memberOf thinkster.authentication.services.Authentication
         */
        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }

        /**
         * @name unauthenticate
         * @desc Delete the cookie where the user object is stored
         * @returns {undefined}
         * @memberOf thinkster.authentication.services.Authentication
         */
        function unauthenticate() {
            delete $cookies.authenticatedAccount;
        }
    }
})();