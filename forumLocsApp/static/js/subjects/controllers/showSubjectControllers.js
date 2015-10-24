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
        var id_subject = $stateParams.id;

        Subjects.getAllMessagesInSubject(42, 1);

    }

})();