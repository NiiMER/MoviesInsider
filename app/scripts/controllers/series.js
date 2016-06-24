'use strict';

/**
 * @ngdoc function
 * @name moviesInsiderApp.controller:showsCtrl
 * @description
 * # showsCtrl
 * Controller of the moviesInsiderApp
 */
angular.module('moviesInsiderApp')
  .controller('SeriesCtrl', function ($scope, $http, fetchingService) {
    $scope.series = [];

    fetchingService.getSeries().then(function(data){
        $scope.series = data;
    });

  });
