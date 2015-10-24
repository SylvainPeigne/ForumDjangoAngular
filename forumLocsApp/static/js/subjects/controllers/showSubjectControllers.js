/**
 * Created by sylflo on 10/22/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('ShowSubjectController', ShowSubjectController);

    ShowSubjectController.$inject = ['$scope', 'Subjects', '$stateParams'];

    function ShowSubjectController($scope, Subjects, $stateParams) {

        console.log("scope = ", $stateParams.id);
        var idSubject = $stateParams.idSubject;
        var idPage = $stateParams.idPage;

        Subjects.getAllMessagesInSubject(idSubject, idPage).then(getAllMessagesInSubjectSuccessFn,
        getAllMessagesInSubjectErrorFn);

        function getAllMessagesInSubjectSuccessFn(data, status, headers, config) {
            console.log("getting subject ", data.data);
            $scope.messages = data.data;
        }

        function getAllMessagesInSubjectErrorFn(data, status, headers, config) {
            console.error('Epic failure when getting subject');
        }
    }

})();