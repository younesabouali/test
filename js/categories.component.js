(function() {
  "use strict";

  angular.module("categories", ["data"]).component("categories", {
    templateUrl: "categories.html",
    controller: categoriesController,
    bindings: {
      data: "<"
    }
  });

  function categoriesController(MenuDataService, $scope) {
    var $ctrl = this;
    $ctrl.data = $scope.$parent.ctrl.categories;
  }

  categoriesController.$inject = ["MenuDataService", "$scope"];
})();
