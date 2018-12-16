
forRentApp.controller("loginCtrl", function($scope, $location, user) {
    
    $scope.logemail = "eran@keinan.com";
    $scope.logpwd = "1111";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        user.login($scope.logemail, $scope.logpwd).then(function() {
            // success login
            $location.path("/")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});