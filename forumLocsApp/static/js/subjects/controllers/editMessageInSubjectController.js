/**
 * Created by sylflo on 10/29/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('EditMessageInSubjectController', EditMessageInSubjectController);

    EditMessageInSubjectController.$inject = ['$scope', '$uibModal'];

    function EditMessageInSubjectController($scope, $uibModal) {

        $scope.idMessage = null;
        $scope.animationsEnabled = true;

        $scope.open = function (size, idMessage) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceEditCtrl',
                size: size,
                resolve: {
                    idMessage: function () {
                        return idMessage;
                    }
                }
            });

        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }

    // Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('ModalInstanceEditCtrl', ModalInstanceEditCtrl);

    ModalInstanceEditCtrl.$inject = ['$scope', '$uibModalInstance', 'idMessage', 'Subjects', '$state'];

    function ModalInstanceEditCtrl($scope, $uibModalInstance, idMessage, Subjects, $state) {


        $scope.idMessage = idMessage;


        $scope.editPost = function () {
            Subjects.editMessageInSubject(idMessage, $scope.message_content).then(editMessageInSubjectSuccessFn, editMessageInSubjectErrorFn);
        };

        function editMessageInSubjectSuccessFn(data, status, headers, config) {
            console.log("Succes when editing ", data.data);
            $uibModalInstance.close();
            $state.reload();
        }

        function editMessageInSubjectErrorFn(data, status, headers, config) {
            console.error("Failure when edition post");
        }


        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

})();



