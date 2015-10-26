/**
 * Created by sylflo on 10/16/15.
 */

(function () {

    'use strict';
    angular
        .module(NAME + 'UsersControllers')
        .controller('LoginController', LoginController)
        .controller('ModalInstanceController', ModalInstanceController);

    LoginController.$inject = ['$scope', '$uibModal', '$window', 'Authentication'];

    function LoginController($scope, $uibModal, $window, Authentication) {

        $scope.animationsEnabled = true;
        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'LoginModalContent.html',
                controller: 'ModalInstanceController',
                size: size
            });


        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        $scope.logout = function () {
            Authentication.logout().then(logoutSuccessFn, logoutErrorFn);

            function logoutSuccessFn(data, status, headers, config) {
                console.log("logout Success", data.data);
                Authentication.unauthenticate();
                $window.location.reload('/');

            }

            function logoutErrorFn(data, status, headers, config) {
                console.error('Epic failure');

            }
        };

    }


    /* ModalInstance Controller */
    ModalInstanceController.$inject = ['$scope', '$window', '$modalInstance', 'Authentication'];

    function ModalInstanceController($scope, $window, $modalInstance, Authentication) {

        $scope.logUser = function () {
            Authentication.login($scope.username, $scope.password).then(loginSuccessFn, loginErrorFn);


            function loginSuccessFn(data, status, headers, config) {
                console.log("data success = ", data);
                Authentication.setAuthenticatedAccount(data.data);
                $modalInstance.close();
               // $window.location.reload('/');

            }

            function loginErrorFn(data, status, headers, config) {
                console.error("Epic failure data = ", data);
            }

        };


        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();