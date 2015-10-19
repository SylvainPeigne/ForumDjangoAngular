/**
 * Created by sylflo on 10/16/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'UsersControllers')
        .controller('LoginController', LoginController)
        .controller('ModalInstanceController', ModalInstanceController);

    LoginController.$inject = ['$scope', '$uibModal', 'Authentication', '$log'];

    function LoginController($scope, $uibModal, Authentication, $log) {

        $scope.animationsEnabled = true;
        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'LoginModalContent.html',
                controller: 'ModalInstanceController',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };


        /*
         call_service(Authentication);
         */


    }

    /* function call_service(Authentication) {
     Authentication.login("toto", "toto").then(loginSuccessFn, loginErrorFn);

     function loginSuccessFn(data, status, headers, config) {
     console.log("data success = ", data);
     }

     function loginErrorFn(data, status, headers, config) {
     console.error("Epic failure data = ", data);
     }
     }*/

    ModalInstanceController.$inject = ['$scope', '$modalInstance', 'items'];

    function ModalInstanceController($scope, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            //item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
})();