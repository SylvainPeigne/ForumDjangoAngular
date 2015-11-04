(function () {

    'use strict';

    angular
        .module(NAME + 'UsersServices')
        .factory('Users', Users);

    Users.$inject = ['$http', '$localStorage'];

    function Users($http, $localStorage) {
    	var Users = {
    		getCurrentUser : getCurrentUser
    	};

    	return Users;

    	function getCurrentUser() {
    		return ($http.get('/api/users_forum/0/'));
    	}
    }

})();