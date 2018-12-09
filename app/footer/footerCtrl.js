app.controller("footerCtrl", function($scope, promotedSrv, $location, $log) {

    $scope.cookiesModal = function() {
        
        $("#cookiesModal").modal({backdrop: true});
        $("#cookiesModal").modal({display: true});
      };      

});