angular.module('validationApp')
.service('validationService',function($q,$http)
{
    var getUserRoles = function() {
        return $q(function(resolve, reject) {
        $http({
         method: 'GET',
         url: "https://reqres.in/api/users?page=2",
         headers: {'Content-Type': 'application/json'}
         }).then(function (response) {
            //console.log("ROLESS",response);
           if(response.data.Ack === "1") {
              resolve(response.data);
           } else {
                reject(response.data.msg);
           }
           //console.log("ROLESS",response);
        },function(response) {
                     //console.log(response);
             reject(response.data.msg);
            });
        });
     };

     var countrylist = function() {
         alert("Koushi Service");
        return $q(function(resolve, reject) {
        $http({
         method: 'GET',
         url: "https://reqres.in/api/users?page=2",
         headers: {'Content-Type': 'application/json'}
         }).then(function (response) {
            //console.log("ROLESS",response);
           if(response.data) {
              resolve(response.data);
              console.log("CountruList",response.data);
           } else {
                reject(response.data.msg);
           }
           //console.log("ROLESS",response);
        },function(response) {
                     //console.log(response);
             reject(response.data.msg);
            });
        });
     };


     return{
        countrylist=countrylist
     }
});