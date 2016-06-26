'use strict';

/**
 * @ngdoc directive
 * @name moviesInsiderApp.directive:dirGenresList
 * @description directive to render the side genres menu
 * # dirGenresList
 */
angular.module('moviesInsiderApp')
 .directive('dirGenresList', function () {
    return {
        templateUrl: 'views/directives/dirgenreslist.html',
        restrict: 'E',
        controller: function($scope, $rootScope, fetchingService){
            $scope.movieGenres = [];
            fetchingService.getGenres().then(function(data){
                $scope.movieGenres = data;
            });

            $rootScope.currentType = 'movies';
        }
    };
 });