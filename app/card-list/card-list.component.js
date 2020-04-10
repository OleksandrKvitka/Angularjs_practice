'use strict';

angular.
  module('cardList').
  component('cardList', {
    templateUrl: 'card-list/card-list.template.html',
    controller: ['Card',
      function CardListController(Card) {
        this.cards = Card.query();
        let size = this.cards.length;
        this.show = [];
        this.change = [];
        this.meny_show = [];
        for(var i = 0; i < size; i++) {
          this.show.push(false);
          this.change.push(false);
          this.meny_show.push(false);
        }
        this.showCard = function(id) {
          this.show[id] = !this.show[id];
        }
        this.changeArr = function(id) {
          this.change[id] = !this.change[id];
        }
        this.showMenu = function(id) {
          this.meny_show[id] = !this.meny_show[id];
        }
      }
    ]
  });
