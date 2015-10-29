/**
 * Created by sylflo on 10/22/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('ShowSubjectController', ShowSubjectController);

    ShowSubjectController.$inject = ['$scope', 'Subjects', '$stateParams', '$state', 'Authentication'];

    function ShowSubjectController($scope, Subjects, $stateParams, $state, Authentication) {

        var vm = this;
        var idSubject = $stateParams.idSubject;
        var idPage = $stateParams.idPage;



        var authenticatedAccount = Authentication.getAuthenticatedAccount();
       // console.log("Account = ", authenticatedAccount);


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
            vm.messages = data.data;
        }

        function getAllMessagesInSubjectErrorFn(data, status, headers, config) {
            console.error('Epic failure when getting subject');
        }

        function showPagination(nbPage) {
            vm.totalItems = nbPage * 10;
            vm.currentPage = idPage;

            vm.pageChanged = function () {
                $state.go('show-subject', { 'idSubject': idSubject, 'idPage': vm.currentPage });

            };


        }


    }

})
();