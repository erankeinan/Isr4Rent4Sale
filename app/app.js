var forRentApp = angular.module("forRentApp", ["ngRoute"]);

forRentApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html", 
        controller: "loginCtrl"
    }).when("/signup", {
      //  templateUrl: "#", todo
    }).when("/forRent", {
        templateUrl: "app/torent/torent.html",
        controller: "torentCtrl"
    }).when("/forSale", {
       // templateUrl: "#", todo
    }).when("/chosenprop/:propId" , {
        templateUrl: "app/chosenProp/chosenprop.html",
        controller: "chosenpropCtrl"
    }).when("/upload" , {
        templateUrl: "app/home/home.html"
    })
})