/**
 * Created by sylflo on 10/22/15.
 */

(function(){

    'use strict';

    angular
        .module(NAME + 'SubjectsServices')
        .factory('Subjects', Subjects);

    Subjects.$inject = ['$http'];

    function Subjects($http) {

        var Subjects = {
            createSubject: createSubject,
            getSubject: getSubject,
            replySubject: replySubject
        };

        return Subjects;

        function createSubject(name) {
            return $http.post('/api/subjects/', {
                name: name
            });
        }

        function getSubject(id) {
            return $http.get('/api/subjects/' + id + '/');
        }

        function replySubject() {

        }

    }

})();