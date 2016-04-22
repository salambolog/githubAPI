angular.module('Services', [])
      .factory('githubService', function($http){

          var runUserRequest = function(username) {
           return $http({
              method :'JSONP',
              url    : 'https://api.github.com/users/'+username+'/events?callback=JSON_CALLBACK'
            })
          };
          return {
            event : function(username){
              return runUserRequest(username);
            }
          }
    });



      var app = angular.module('App',['Services']);
      app.controller('Controller', function($scope, $timeout, githubService){
          var timeout;
          $scope.$watch('username', function(newUsername){
              if(newUsername){

                if(timeout) $timeout.cancel(timeout);

                timeout = $timeout(function(){
                  githubService.event(newUsername).success(function(data,status){
                    console.log('success');
                    console.log(data);
                    $scope.events = data.data;
                  });

                },350);
              }
          });
      });
