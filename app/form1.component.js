angular.
  module('app').
  component('form1', {  
    templateUrl: 'form1.template.html',
    controller: function PaymentCardController($scope) {
      $scope.show = false;
      $scope.hide = true;
      $scope.showCard = function() {
        $scope.show = !$scope.show;
        $scope.hide = !$scope.hide;
      }
      $scope.changeW = false;
      $scope.changeB = true;
      $scope.changeArr = function() {
        $scope.changeB = !$scope.changeB;
        $scope.changeW = !$scope.changeW;
      }
      $scope.focus = false;
      this.payment = {
        number: '3256',
        payer: 'ФОП Люк Скайуокер',
        account_section: 'Академія штурмового корпусу',
        pay_assignment: 'У т.ч. ПДВ 20% - 16.67 грн',
        sum: '100 000,00 ₴',
        payer_code: '1234567890',
        payer_bank_code: '1234567890',
        payer_bank: 'Банк Галактичної Імперії',
        recipient: 'Галактична Імперія',
        recipient_code: '1234567890',
        recipient_bank_code: '302076',
        recipient_bank: 'Банк Галактичної Імперії',
        debit_credit: '260012340002',
        sum_text: 'Сто тисяч грн. 00 коп.'
      };
    }
  });