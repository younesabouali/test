(function() {
  "use strict";

  angular.module("MenuApp").config(routeConfig);

  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        template: "<categories></categories>",
        controller: "categoriesCtrl as ctrl",
        resolve: {
          categories: [
            "MenuDataService",
            function(MenuDataService) {
              return MenuDataService.getAllCategories();
            }
          ]
        }
      })
      .state("itemsMenu", {
        url: "/items-menu/{itemId}",
        template: "<items></items>",
        //   template: "<h1>Hello world</h1>",
        controller: "itemsCtrl as ctrl",
        resolve: {
          item: [
            "$stateParams",
            "MenuDataService",

            function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemId);
            }
          ]
        }
      });
  }
})();
