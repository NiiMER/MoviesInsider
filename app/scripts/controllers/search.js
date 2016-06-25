'use strict';

/**
 * @ngdoc function
 * @name moviesInsiderApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the moviesInsiderApp
 */
angular.module('moviesInsiderApp')
  .controller('SearchCtrl', function ($scope, $rootScope, $routeParams, fetchingService) {
    $scope.movies = [];
    console.log($routeParams);
    fetchingService.getByGenres($routeParams.type, $routeParams.genre).then(function(data){
        $scope.movies = data;
    });
    $scope.isGenreType = function(genres){
        if(genres !== undefined){
            return (genres.indexOf($routeParams.genre)> -1)? true: false;
        }
        return false;
    };
  });
