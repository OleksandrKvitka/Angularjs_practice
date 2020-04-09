'use strict';

angular.
  module('cardApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/cards', {
          template: '<card-list></card-list>'
        }).
        otherwise('/cards');
    }
  ]);
