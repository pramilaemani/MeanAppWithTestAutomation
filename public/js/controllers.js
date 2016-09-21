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
      url: '/api/vinDetails'
    }).
    success(function (data, status, headers, config) {
      $scope.vinDetails = data.vinDetails;      
    }).
    error(function (data, status, headers, config) {
      $scope.vinDetails = 'Error!';
    });

  }]).
  controller('CampDetCtrl', function ($scope) {
    // write Ctrl here

  }).
  controller('VinDetCtrl', function ($scope) {
    // write Ctrl here

  });
