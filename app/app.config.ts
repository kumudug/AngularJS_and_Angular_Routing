'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider: angular.ILocationProvider, $routeProvider: angular.route.IRouteProvider) {
      //$locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise({
          template: '<phone-list></phone-list>'
        });
    }
  ]);
