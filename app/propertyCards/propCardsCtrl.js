forRentApp.controller("propCardsCtrl", function($scope, propCardsSrv, $location, $log) {
    
    $scope.promoteds = [];
    $scope.filterParams = {};
    $scope.filteredProps = [];
    $scope.properties = [];


    propCardsSrv.getPromotedProp().then(function (promoteds) {
        $scope.promoteds = promoteds;
    }, function(error) {
        $log.error(error);
    });
    
    $scope.cardclick = function(promoted) {            
        var propid = promoted.id;
        $location.path("/chosenprop/" + propid);
   }
       

   propCardsSrv.getAllProp().then(function (properties) {
        $scope.properties = properties;
        }, function(error) {
        $log.error(error);
    });

    $scope.filterParams = propCardsSrv.prepareParamsObj($scope.action, $scope.promotedInd, $scope.btype, $scope.type, $scope.minPrice, $scope.maxPrice, $scope.rooms, $scope.furniture);
        

    $scope.filteredProps = propCardsSrv.filterParams($scope.filterParams);
    


});