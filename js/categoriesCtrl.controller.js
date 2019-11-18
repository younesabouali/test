(function() {
  "use strict";
  angular.module("MenuApp").controller("categoriesCtrl", categoriesCtrl);
  categoriesCtrl.$inject = ["categories"];
  function categoriesCtrl(categories) {
    const ctrl = this;
    ctrl.categories = categories.data;
  }
})();
