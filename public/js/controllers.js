'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngRoute']).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("in the controller");
    $http({
      method: 'GET',
      url: '/api/allVinDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.allVinDetails = data.allVinDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.allVinDetails = 'Error!';
    });

    $http({
      method: 'GET',
      url: '/api/allCampDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.allCampDetails = data.allCampDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.allCampDetails = 'Error!';
    });
  }]).
  controller('CampDetCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {    
    
    $scope.getCampDetails = function(){ 
         
      $http.get('/api/getSelCampDetails/'+$scope.form.vinid).
      success(function(data){
        $location.path('/getCampDetails');
        $scope.selCampDetails = data.selCampDetails;
      });
    };    
  }]).
  controller('VinDetCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams,$location) {
    
    $scope.getVinDetails = function(){
    
      $http.get('/api/getSelVinDetails/'+$scope.form.campid).
      success(function(data){
        $location.path('/getVinDetails');
        $scope.selVinDetails = data.selVinDetails;
      });
    }; 

  }]);
