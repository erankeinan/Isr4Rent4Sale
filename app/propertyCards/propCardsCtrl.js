app.controller("propCardsCtrl", function($scope, promotedSrv, $location) {
    
    promotedSrv.getPromotedProp().then(function (promoteds) {
        $scope.promoteds = promoteds;
    }, function(error) {
        
    })

});