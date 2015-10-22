/**
 * Created by sylflo on 10/22/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('SubjectController', SubjectController);

    SubjectController.$inject = ['$scope', 'Subjects', '$stateParams'];

    function SubjectController($scope, Subjects, $stateParams) {

        console.log("scope = ", $stateParams.id);
        var id_subject = $stateParams.id;

        Subjects.getSubject(id_subject).then(getSubjectSuccessFn, getSubjectErrorFn);

        function getSubjectSuccessFn(data, status, headers, config) {
            console.log("Succces get Subject = ", data.data);
        }

        function getSubjectErrorFn(data, status, headers, config) {
            console.error("Epic failure get Subject");
        }

        $scope.create = function() {

            console.log("in function");
            Subjects.createSubject($scope.name).then(createSubjectSuccessFn, createSubjectErrorFn);

            function createSubjectSuccessFn(data, status, headers, config) {
                console.log("success creating subject data = ", data.data);
            }

            function createSubjectErrorFn(data, status, headers, config) {
                console.error('Epic failure creating subject !');
            }
        }

    }

})();