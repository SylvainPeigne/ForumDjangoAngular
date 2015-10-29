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

        $scope.modalMessage = null;
        $scope.animationsEnabled = true;
      //  console.log("Message = ", $scope.message.content);


        $scope.open = function (size, message) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceEditCtrl',
                size: size,
                resolve: {
                    modalMessage: function () {
                        return message;
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

    ModalInstanceEditCtrl.$inject = ['$scope', '$uibModalInstance', 'modalMessage', 'Subjects', '$state'];

    function ModalInstanceEditCtrl($scope, $uibModalInstance, modalMessage, Subjects, $state) {

        $scope.contentMessage = modalMessage.content;
        $scope.message_content = "";

        $scope.editPost = function () {
            Subjects.editMessageInSubject(modalMessage.id, $scope.newContentMessage ).then(editMessageInSubjectSuccessFn, editMessageInSubjectErrorFn);
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



