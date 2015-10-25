/**
 * Created by sylflo on 10/22/15.
 */

(function () {

    'use strict';

    angular
        .module(NAME + 'SubjectsServices')
        .factory('Subjects', Subjects);

    Subjects.$inject = ['$http'];

    function Subjects($http) {

        var Subjects = {
            createSubject: createSubject,
            getSubject: getSubject,
            newMessageInSubject: newMessageInSubject,
            getAllMessagesInSubject: getAllMessagesInSubject,
            getNbPageInSubject: getNbPageInSubject
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

        function newMessageInSubject(idSubject, content) {

            return $http.post('/api/messages/', {
                idSubject: idSubject,
                content: content
            });

        }

        function getAllMessagesInSubject(idSubject, idPage) {
            var param = idSubject + "-" + idPage;
            return $http.get('/api/subjects/' + param + '/messages/');
        }

        function getNbPageInSubject(idSubject) {
            return $http.get('/api/subjects/nb-message/' + idSubject + '/')
        }

    }

})();