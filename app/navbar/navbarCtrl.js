forRentApp.controller("navbarCtrl", function($scope, user, $location) {
    
    $scope.isUserLoggedIn = function() {
        return user.isLoggedIn();
    }

    $scope.logout = function() {
        user.logout();
        $location.path("/");
    }

    $scope.openLogin = function() {
        $("#loginModal").modal({backdrop: true});
        $("#loginModal").modal({display: true});
      };   

      $scope.openSignup = function() {
        $("#signupModal").modal({backdrop: true});
        $("#signupModal").modal({display: true});
      }; 

});