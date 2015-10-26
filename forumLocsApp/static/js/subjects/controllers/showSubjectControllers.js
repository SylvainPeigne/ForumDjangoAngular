/**
 * Created by sylflo on 10/22/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('ShowSubjectController', ShowSubjectController);

    ShowSubjectController.$inject = ['$scope', 'Subjects', '$stateParams', '$state'];

    function ShowSubjectController($scope, Subjects, $stateParams, $state) {

        var idSubject = $stateParams.idSubject;
        var idPage = $stateParams.idPage;

        Subjects.getNbPageInSubject(idSubject).then(getNbPageInSubjectSuccessFn, getNbPageInSubjectErrorFn);

        function getNbPageInSubjectSuccessFn(data, status, headers, config) {
            showPagination(data.data);
            Subjects.getAllMessagesInSubject(idSubject, idPage).then(getAllMessagesInSubjectSuccessFn,
                getAllMessagesInSubjectErrorFn);

        }

        function getNbPageInSubjectErrorFn(data, status, headers, config) {
            console.error('Error when getting page in a subject', data.data);
        }


        function getAllMessagesInSubjectSuccessFn(data, status, headers, config) {
            $scope.messages = data.data;
        }

        function getAllMessagesInSubjectErrorFn(data, status, headers, config) {
            console.error('Epic failure when getting subject');
        }

        function showPagination(nbPage) {
            $scope.totalItems = nbPage * 10;
            $scope.currentPage = idPage;

            $scope.pageChanged = function () {
                console.log('Page changed to: ' + $scope.currentPage);
                $state.go('show-subject', { 'idSubject': idSubject, 'idPage': $scope.currentPage });

            };


        }


    }

})
();