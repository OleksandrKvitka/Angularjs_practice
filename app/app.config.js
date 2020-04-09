'use strict';

angular.
  module('cardApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cards', {
          template: '<card-list></card-list>'
        }).
        when('/cards/login', {
          template: '<login></login>'
        }).
        otherwise('/cards');
    }
  ]);
