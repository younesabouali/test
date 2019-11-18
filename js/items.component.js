(function() {
  "use strict";

  angular.module("items", []).component("items", {
    templateUrl: "items.html",
    controller: itemscontroller,
    bindings: {
      item: "<"
    }
  });
  itemscontroller.$inject = ["$scope", "$rootScope"];
  function itemscontroller($scope, $rootScope) {
    var $ctrl = this;
    $ctrl.config = $scope.$parent.ctrl.item.data.menu_items;
  }
})();
