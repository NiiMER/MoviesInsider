'use strict';

/**
 * @ngdoc function
 * @name moviesInsiderApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the moviesInsiderApp
 */
angular.module('moviesInsiderApp')
  .controller('MoviesCtrl', function ($scope, $rootScope, $http, fetchingService) {
    $rootScope.currentType = 'movies';
    $scope.movies = [];

    fetchingService.getMovies().then(function(data){
        $scope.movies = data;
    });

    $scope.getRating = function(ratingNumber){
        return Math.round(parseFloat(ratingNumber) * 100) / 100;
    };

  });
