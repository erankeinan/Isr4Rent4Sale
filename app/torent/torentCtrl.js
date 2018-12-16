forRentApp.controller("torentCtrl", function($scope, $location, propCardsSrv,  $log) {


    propCardsSrv.prepareParamsObj($scope.action, $scope.promotedInd, $scope.btype, $scope.type, $scope.minPrice, $scope.maxPrice, $scope.rooms, $scope.furniture).then(function (filterParams) {
        $scope.filterParams = filterParams;
    }, function(error) {
        $log.error(error);
    });

    propCardsSrv.filterParams($scope.filterParams).then(function (filteredProps) {
        $scope.filteredProps = filteredProps;
    }, function(error) {
        $log.error(error);
    });
    
    $scope.cardclick = function(promoted) {            
        var propid = promoted.id;
        $location.path("/chosenprop/" + propid);
   }
});