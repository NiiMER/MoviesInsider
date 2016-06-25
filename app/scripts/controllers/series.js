'use strict';

/**
 * @ngdoc function
 * @name moviesInsiderApp.controller:showsCtrl
 * @description
 * # showsCtrl
 * Controller of the moviesInsiderApp
 */
angular.module('moviesInsiderApp')
  .controller('SeriesCtrl', function ($scope, $rootScope, $http, fetchingService) {
    $rootScope.currentType = 'shows';
    $scope.series = [];

    fetchingService.getSeries().then(function(data){
        $scope.series = data;
    });

  });
