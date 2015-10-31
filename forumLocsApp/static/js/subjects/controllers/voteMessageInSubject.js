/**
 * Created by sylflo on 10/31/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('VoteMessageInSubjectController', VoteMessageInSubjectController);

    VoteMessageInSubjectController.$inject = ['$scope', 'Subjects'];


    function VoteMessageInSubjectController($scope, Subjects) {

        var vm = this;

        
        //Faire un patch pour changer le vote;

        vm.upvote = function (message) {
            console.log("upvote = ", message);
            Subjects.upvoteMessageInSubject(message).then(upvoteMessageInSubjectSuccessFn, upvoteMessageInSubjectErrorFn);
        };

        vm.downvote = function (message) {
            console.log("downvote", message);
            Subjects.downvoteMessageInSubject(message).then(downvoteMessageInSubjectSuccessFn, downvoteMessageInSubjectErrorFn);
        };


        function upvoteMessageInSubjectSuccessFn(data, status, headers, config) {
            console.log("Upvote working", data.data);
        }

        function upvoteMessageInSubjectErrorFn(data, status, headers, config) {
            console.error("Error when upvote");
        }

        function downvoteMessageInSubjectSuccessFn(data, status, headers, config) {
            console.log("Upvote working", data.data);
        }

        function downvoteMessageInSubjectErrorFn(data, status, headers, config) {
            console.error("Error when upvote");
        }

    }

})();