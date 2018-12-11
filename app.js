// create angular app
var app = angular.module("app", []);

// create angular controller
app.controller('mainController',function($scope,validationService,$http,$q) {
			
    $scope.TotalList=[];
    var latestcountryList=function(){
    $http({
    method:'GET',
    url:"https://reqres.in/api/users?page=1",
    datatype:'json',
    Headers:{'Content-Type':'application/json'}
    }).success(function(responce){
    $scope.TotalList=responce.data;
    console.log("rrrrrrrrrr",$scope.TotalList);
    console.log(responce.data);
    }).error(function (error1){

    });

    };
    latestcountryList();
    $scope.resetForm=function(){
        $scope.user=[];
        $scope.error='';


    };
    $scope.kList=[];
    var latestnewContryList=function(){
    validationService.GetcountryList().then(function(data){
        $scope.kList=data;
        console.log("fdffddd",$scope.kList);
    })
}
latestnewContryList();
$scope.user=[];
    $scope.editCountry=function(item){
        $scope.user=angular.copy(item);
        
    };

    $scope.addCountry=function(){
        alert("ServiceHit");
        
            $http({
                method:'POST',
                url:"https://reqres.in/api/users",
                data:{
                    "name": "Koushik1",
                    "job": "Team Lead"
                },
                datatype:"json",
                Headers:{'Content-Type':'application/json'}
            }).success(function(responcedata){
            console.log(responcedata);
            }).error(function(error1){

            });

        
    };
$scope.addcountrynew=function(item){
if(item.id)
{
    validationService.Update(item).then(function(response){
        $scope.resetForm();
    },function(error){

    }
);
}
else
{
validationService.add("/country",item).then(function(resolve){

});
}
};
    $scope.UpdateCountry=function(){
        alert("ServiceHit");
        
            $http({
                method:'PUT',
                url:"https://reqres.in/api/users/877",
                data:{
                    "name": "Koushik1",
                    "job": "Team Lead1"
                },
                datatype:"json",
                Headers:{'Content-Type':'application/json'}
            }).success(function(responcedata){
            console.log(responcedata);
            }).error(function(error1){

            });

        
    };
    
    $scope.activate=function(itemId){

    };
    $scope.Dactiveactivate=function(itemId){

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


});

app.filter("searchFilter",function(){
    debugger;
return function(items,searchText){
    if(!angular.isDefined(searchText) || searchText == ''){
        return items;
       }  
    var filtered = [];
    angular.forEach(items, function(item) {

        if(item.toString().toLowerCase().indexOf(searchText.toString().toLowerCase()) !== -1){
                filtered.push(item);
            }
    });
return filtered;
}
});
