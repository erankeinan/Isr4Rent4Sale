app.controller("propCardsCtrl", function($scope, promotedSrv, $location, $log) {
    
    $scope.promoteds = [];

    promotedSrv.getPromotedProp().then(function (promoteds) {
        $scope.promoteds = promoteds;
    }, function(error) {
        $log.error(error);
    });

        
});