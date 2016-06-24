'use strict';

/**
 * @ngdoc function
 * @name moviesInsiderApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the moviesInsiderApp
 */
angular.module('moviesInsiderApp')
  .controller('MoviesCtrl', function ($scope, $http, fetchingService) {
    $scope.movies = [];

    fetchingService.getMovies().then(function(data){
        $scope.movies = data;
    });

  });
