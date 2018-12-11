
app.service("validationService",function($q,$http){

    return({
        countrylist:countrylist,
        GetcountryList:GetcountryList,
        Update:Update
     });

function GetcountryList()
{
   return $q(function(resolve,reject){
    $http({
        method:'GET',
        url:"https://reqres.in/api/users?page=2",
        datatype:'json',
        Headers:{'Content-Type':'application/json'}
        }).success(function (responce){
        resolve(responce.data)
        }).error(function(errorList1){
        reject("Failed To Load Data")
        })
    })
    
}

function Update(item){
    console.log("datakkkk",item);
   return $q(function(resolve,reject){
    $http({
    method:'PUT',
    url:"https://reqres.in/api/users/2",
    data:{"name":item.first_name,"job":item.last_name},
    datatype:'json',
    Headers:{'Content-Type':'application/json'}
    }).success(function(responce){
    console.log("Modi",responce);
    resolve(responce.data)
    }).error(function(error1){
    reject("Failed To Update")
    })
    });
}
     
});
