/**
 * Created by sylflo on 10/16/15.
 */

(function(){

    'use strict';

    angular
        .module(NAME + 'UsersControllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'Authentication'];

    function LoginController($scope, Authentication) {

        Authentication.login("toto", "toto").then(loginSuccessFn, loginErrorFn);

        function loginSuccessFn(data, status, headers, config) {
            console.log("data success = ", data);
        }

        function loginErrorFn(data, status, headers, config) {
            console.error("Epic failure data = ", data);
        }
    }

})();