'use strict';

/**
 * @ngdoc function
 * @name moviesInsiderApp.controller:SearchCtrl
 * @description: Controller for the movies/series page by genres it's fetch data from localStorageService
 * # SearchCtrl
 * Controller of the moviesInsiderApp
 */
angular.module('moviesInsiderApp')
  .controller('SearchCtrl', function ($scope, $rootScope, fetchingService, localStorageService, $routeParams) {
    $scope.movies = [];
    $scope.lsKeys = localStorageService.keys();

    fetchingService.getByGenres($routeParams.type, $routeParams.genre).then(function(data){
        $scope.movies = data;
    });

    $scope.isGenreType = function(genres){
        if(genres !== undefined){
            return (genres.indexOf($routeParams.genre)> -1)? true: false;
        }
        return false;
    };

    $scope.getRating = function(ratingNumber){
        return Math.round(parseFloat(ratingNumber) * 100) / 100;
    };

    $scope.toggleWatchedMovie = function(movieID){
        localStorageService.set('whatched_movie_id'+movieID, movieID);
        $scope.lsKeys.push('whatched_movie_id'+movieID);
    };

    $scope.isWhatchedMovie = function(movieID){
        return ($scope.lsKeys.indexOf('whatched_movie_id'+movieID)>-1)?true: false;
    };
  });
