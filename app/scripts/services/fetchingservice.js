'use strict';

/**
 * @ngdoc service
 * @name moviesInsiderApp.fetchingService
 * @description
 * # fetchingService
 * Service in the moviesInsiderApp.
 */
angular.module('moviesInsiderApp')
  .service('fetchingService', function ($http, $httpParamSerializerJQLike, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var FetchingService = function(){
        this.apiPath = "https://api-v2launch.trakt.tv";
        this.apiToken = "055bd8c102d9f00e7b49b869a400f0ccd4f143c8383c8c59704e9673ceca8840";
        this.apiVersion = 2;
        this.headersObject = {
            "Content-Type": "application/json",
            "trakt-api-version": this.apiVersion,
            "trakt-api-key" : this.apiToken
        };
        this.apiParams = {
            page: 1,
            limit: 29
        };
        this.period = "/monthly";
    };

    FetchingService.prototype = function(){

        var fetchGenres = function(){
            var deffered =  $q.defer();
            $http({
                method: 'GET',
                url: this.apiPath + '/genres/movies',
                headers: this.headersObject,
                params: this.apiParams,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                deffered.resolve(response.data);
            }, function errorCallback(response) {
                console.log(response);
            });
            return deffered.promise;
        };

        var fetchMovies = function(){
            var deffered = $q.defer();

            Object.defineProperty(this.apiParams, 'extended', {
              enumerable: true,
              configurable: false,
              writable: true,
              value: 'full,images'
            });

            $http({
                method: 'GET',
                url: this.apiPath + '/movies/watched' + this.period,
                headers: this.headersObject,
                params: this.apiParams,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then(function successCallback(response){
                deffered.resolve(response.data);
            }, function errorCallback(response){
                console.log(response);
            });
            return deffered.promise;
        };

        var fetchSeries = function(){
            var deffered = $q.defer();

            Object.defineProperty(this.apiParams, 'extended', {
              enumerable: true,
              configurable: false,
              writable: true,
              value: 'full,images'
            });

            $http({
                method: 'GET',
                url: this.apiPath + '/shows/watched' + this.period,
                headers: this.headersObject,
                params: this.apiParams,
                paramSerializer: '$httpParamSerializerJQLike'
            }).then(function successCallback(response){
                deffered.resolve(response.data);
            }, function errorCallback(response){
                console.log(response);
            });
            return deffered.promise;
        };


        return {
            getGenres: fetchGenres,
            getMovies: fetchMovies,
            getSeries: fetchSeries
        };

    }();

    var fetchingService = new FetchingService();
    return fetchingService;

  });
