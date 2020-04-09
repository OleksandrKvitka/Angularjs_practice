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
        this.focus = [];
        for(var i = 0; i < size; i++) {
          this.show.push(false);
          this.change.push(false);
          this.meny_show.push(false);
          this.focus.push(false);
        }
        this.showCard = function() {
          this.show[1] = !this.show[1];
        }
        this.changeArr = function() {
          this.change[1] = !this.change[1];
        }
        this.showMenu = function(id) {
          this.meny_show[id] = !this.meny_show[id];
        }
      }
    ]
  });
