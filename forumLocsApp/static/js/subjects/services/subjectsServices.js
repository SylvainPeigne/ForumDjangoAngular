/**
 * Created by sylflo on 10/22/15.
 */

(function(){

    'use strict';

    angular
        .module('SubjectsServices')
        .factory('Subjects', Subjects);

    Subjects.$inject = ['$http'];

    function Subjects($http) {

        var Subjects = {
            createSubject: createSubject,
            getSubject: getSubject,
            replySubject: replySubject
        };

        return Subjects;

        function createSubject() {

        }

        function getSubject() {

        }

        function replySubject() {

        }

    }

})();