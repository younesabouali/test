(function() {
  "use strict";

  angular.module("data").service("MenuDataService", MenuDataService);
  MenuDataService.$inject = ["$http"];
  function MenuDataService($http) {
    var service = this;
    const category = $http({
      metod: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(res) {
      return res;
    });
    service.getAllCategories = function() {
      return category;
      // return "HEllo";
    };
    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url:
          "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
          categoryShortName
      });
    };
  }
})();
