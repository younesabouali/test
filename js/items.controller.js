(function() {
  "use strict";

  angular.module("MenuApp").controller("itemsCtrl", itemsCtrl);
  itemsCtrl.$inject = ["item", "$scope"];
  function itemsCtrl(item, $scope) {
    var $ctrl = this;
    $ctrl.item = item;
  }
})();
