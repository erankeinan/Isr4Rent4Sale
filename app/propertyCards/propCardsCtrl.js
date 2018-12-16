forRentApp.controller("propCardsCtrl", function($scope, promotedSrv, $location, $log) {
    
    $scope.promoteds = [];

    promotedSrv.getPromotedProp().then(function (promoteds) {
        $scope.promoteds = promoteds;
    }, function(error) {
        $log.error(error);
    });
    $scope.cardclick = function(promoted) {            
        var propid = promoted.id;
        $location.path("/chosenprop/" + propid);
   }
       
   
   romotedSrv.getPromotedProp().then(function (promoteds) {
    $scope.promoteds = promoteds;
    }, function(error) {
        $log.error(error);
    });

});