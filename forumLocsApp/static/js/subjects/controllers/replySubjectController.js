/**
 * Created by sylflo on 10/29/15.
 */
(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('ReplySubjectController', ReplySubjectController);

    ReplySubjectController.$inject = ['$scope', '$state', 'Subjects'];

    function ReplySubjectController($scope, $state, Subjects) {

        var vm = this;
        vm.sendReply = function() {
            console.log("Send response");
            //Envoyer (idSubject Author this two see back end) and content
            Subjects.newMessageInSubject($scope.idSubject, vm.content).then(newMessageInSubjectSuccessFn, newMessageInSubjectErrorFn);

            function newMessageInSubjectSuccessFn(data, status, headers, config) {
                console.log("success posting a message ", data.data);
                $state.reload();
            }

            function newMessageInSubjectErrorFn(data, status, headers, config) {
                console.error("Failure when posting a message");
            }
        }
    }


})();