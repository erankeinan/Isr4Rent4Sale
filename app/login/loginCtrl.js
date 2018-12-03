
app.controller("loginCtrl", function($scope, $location, user) {
    
    $scope.email = "eran.keinan@gmail.com";
    $scope.pwd = "1111";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        user.login($scope.email, $scope.pwd).then(function() {
            // success login
            $location.path("/")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});