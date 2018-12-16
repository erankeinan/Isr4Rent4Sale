forRentApp.controller("propCardsCtrl", function($scope, propCardsSrv, $location, $log) {
    
    $scope.promoteds = [];

    propCardsSrv.getPromotedProp().then(function (promoteds) {
        $scope.promoteds = promoteds;
    }, function(error) {
        $log.error(error);
    });
    
    $scope.cardclick = function(promoted) {            
        var propid = promoted.id;
        $location.path("/chosenprop/" + propid);
   }
       

});