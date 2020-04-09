'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: 'login/login.template.html',
    controller: ['Login',
      function CardListController(Login) {
        this.page = Login.query();
        this.right_cell_focus = false;
      }
    ]
  });
