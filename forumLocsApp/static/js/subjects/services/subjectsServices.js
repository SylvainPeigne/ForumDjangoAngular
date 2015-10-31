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
            getNbPageInSubject: getNbPageInSubject,
            editMessageInSubject: editMessageInSubject,
            downvoteMessageInSubject: downvoteMessageInSubject,
            upvoteMessageInSubject: upvoteMessageInSubject
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

        function editMessageInSubject(idMessage, content) {
            return $http.put('/api/messages/' + idMessage + '/', {
                pk: idMessage,
                content: content
            });
        }

        function downvoteMessageInSubject(message) {

            return $http.put('/api/messages/' + message.id + '/', {
                pk: message.id,
                content: message.content,
                downvote: message.downvote + 1

            });

        }

        function upvoteMessageInSubject(message) {

            return $http.put('/api/messages/' + message.id + '/', {
                pk: message.id,
                content: message.content,
                upvote: message.upvote + 1

            });

        }

    }

})();