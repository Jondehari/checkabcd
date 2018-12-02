// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController',['validationService', function($scope,validationService) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
			alert('our form is amazing');
		}

    };
    $scope.countryList=function()
    {
        alert("Koushik");
        validationService.countrylist().then(function (res) {
            console.log("LOGGGGOUTTTT",res);
            
        }, function (err) {
           
        });
    };
    
    $scope.resetForm=function(){
        $scope.country='';
        $scope.error='';


    };

    $scope.editCountry=function(item){
        $scope.country=angular.copy(item);

    };

    $scope.addCountry=function(item){
        if(item._id){

        }
        else
        {

        }
    };

    $scope.activate=function(itemId){

    };
    $scope.activate=function(itemId){

    };
    $scope.propertName='name';
    $scope.reverse=false;
    $scope.sortBy=function(propertName){
        if($scope.reverse)
        {
            $scope.reverse=false;
        }
        else
        {
            $scope.reverse=true;
        }
        if($scope.reverse)
        {
            $scope.propertName='-'+propertName;
        }
        else
        {
            $scope.propertName=propertName;
        }


    }


}]);