/**
 * 
 */
app.controller('myCtrl', ['$scope','servicer',function($scope,servicer){
	var self=this;
	self.obj={id:null,content:''};
	fetchObj();
	
	function fetchObj(){
        servicer.fetchObj()
            .then(
            function(d) {
                self.obj = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
	
}]);