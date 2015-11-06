(function () {

    'use strict';
    angular
        .module(NAME + 'UsersControllers')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', 'Users'];

    function ProfileController($scope, Users) {
    	Users.getCurrentUser().then(bindCurrentUserSuccess, bindCurrentUserFailure);

    	function bindCurrentUserSuccess(data, status, headers, config) {
    		console.log("Success");
    		$scope.user_data = data.data;
            console.log($scope.user_data);
    	}

    	function bindCurrentUserFailure(data, status, headers, config) {
    		console.log(data);
    		console.log("Failure");
    	}
    }

})();