'use strict';

/**
 * @ngdoc directive
 * @name moviesInsiderApp.directive:dirGenresList
 * @description
 * # dirGenresList
 */
angular.module('moviesInsiderApp')
 .directive('dirGenresList', function () {
    return {
        templateUrl: 'views/directives/dirgenreslist.html',
        restrict: 'E',
        controller: function($scope, fetchingService){
            $scope.movieGenres = [];
            fetchingService.getGenres().then(function(data){
                $scope.movieGenres = data;
            });
        }
    };
 });