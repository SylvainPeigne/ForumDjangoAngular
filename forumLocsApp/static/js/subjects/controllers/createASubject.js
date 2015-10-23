/**
 * Created by sylflo on 10/22/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('CreateSubjectController', CreateSubjectController);

    CreateSubjectController.$inject = ['$scope', 'Subjects', '$state'];

    function CreateSubjectController($scope, Subjects, $state) {

        var idSubject = 0;

        $scope.createSubject = function () {
            Subjects.createSubject($scope.name_subject).then(createSubjectSuccessFn, createSubjectErrorFn);


        };


        function createSubjectSuccessFn(data, status, headers, config) {
            console.log("Create subject succes ", data.data);
            idSubject = data.data.id;
            Subjects.newMessageInSubject(idSubject, $scope.name_subject).then(newMessageInSubjectSuccessFn, newMessageInSubjectErrorFn)
        }

        function createSubjectErrorFn(data, status, headers, config) {
            console.error('Epic failure creating SUbejct');
        }

        function newMessageInSubjectSuccessFn(data, status, headers, config) {
            console.log("Success when creating a message idSubjec = ", idSubject);
            $state.go('show-subject', {id: idSubject})
        }

        function newMessageInSubjectErrorFn(data, status, headers, config) {
            console.error('Epic failure when creating a message in a subject')
        }

    }

})();
