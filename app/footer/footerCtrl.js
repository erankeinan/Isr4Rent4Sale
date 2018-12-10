app.controller("footerCtrl", function($scope, promotedSrv, $location, $log) {

    $scope.cookiesModal = function() {
        
        $("#cookiesModal").modal({backdrop: true});
        $("#cookiesModal").modal({display: true});
      };     

    $scope.privacyModal = function() {
    
    $("#privacyModal").modal({backdrop: true});
    $("#privacyModal").modal({display: true});
    }; 

    $scope.termsModal = function() {
    
        $("#termsModal").modal({backdrop: true});
        $("#termsModal").modal({display: true});
        }; 
});