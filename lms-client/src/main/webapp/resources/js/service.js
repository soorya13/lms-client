/**
 * 
 */
app.factory('servicer',['$http','$q',function($http,$q){
	var URI='http://rest-service.guides.spring.io/greeting';
	var factory={fetchObj:fetchObj};
	return factory;
	
	function fetchObj(){
		var deferred = $q.defer();
        $http.get(URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
	}
}]);