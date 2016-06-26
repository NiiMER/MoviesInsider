'use strict';

/**
 * @ngdoc overview
 * @name moviesInsiderApp
 * @description
 * # moviesInsiderApp
 *
 * Main module of the application.
 */
angular
  .module('moviesInsiderApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/series', {
        templateUrl: 'views/series.html',
        controller: 'SeriesCtrl',
        controllerAs: 'series'
      })
      .when('/search/:type/genres/:genre', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/movies'
      });
      localStorageServiceProvider
        .setPrefix('moviesInsiderApp')
        .setStorageType('localStorage')
        .setNotify(true, true);
  });
