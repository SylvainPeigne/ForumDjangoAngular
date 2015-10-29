/**
 * Created by sylflo on 10/29/15.
 */

(function(){

    'use strict';

    angular
        .module(NAME + 'SubjectsControllers')
        .controller('EditMessageInSubjectController', EditMessageInSubjectController);

    EditMessageInSubjectController.$inject = ['$scope'];

    function EditMessageInSubjectController($scope) {

        $scope.edit = function() {
            console.log("Edit");
        }
    }

})();