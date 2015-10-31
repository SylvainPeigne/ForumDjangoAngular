/**
 * Created by sylflo on 10/31/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('VoteMessageInSubjectController', VoteMessageInSubjectController);

    VoteMessageInSubjectController.$inject = ['$scope'];


    function VoteMessageInSubjectController($scope) {

        var vm = this;

        vm.upvote = function(message) {
            console.log("upvote = ", message)
        };

        vm.downvote = function(message) {
            console.log("downvote", message);
        };

        //c
        // console.log("Second = ", vm.idSubject);
    }

})();