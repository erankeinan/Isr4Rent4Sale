var app = angular.module("forRentApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html", 
        controller: "loginCtrl"
    }).when("/signup", {
      //  templateUrl: "#", todo
    }).when("/forRent", {
       // templateUrl: "#", todo
    }).when("/forSale", {
       // templateUrl: "#", todo
    }).when("/upload" , {
        templateUrl: "app/home/home.html"
    })
})