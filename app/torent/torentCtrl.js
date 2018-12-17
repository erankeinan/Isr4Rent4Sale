forRentApp.controller("torentCtrl", function($scope, $location, propCardsSrv,  $routeParams, $log) {


//     propCardsSrv.prepareParamsObj($routeParams.action, $routeParams.promotedInd, $routeParams.btype, $routeParams.type, $routeParams.minPrice, $routeParams.maxPrice, $routeParams.rooms, $routeParams.furniture).then(function (filterParams) {
//         $scope.filterParams = filterParams;
//     }, function(error) {
//         $log.error(error);
//     });

//     propCardsSrv.filterParams($scope.filterParams).then(function (filteredProps) {
//         $scope.filteredProps = filteredProps;
//     }, function(error) {
//         $log.error(error);
//     });

//     $scope.cardclick = function(promoted) {            
//         var propid = promoted.id;
//         $location.path("/chosenprop/" + propid);
//    }
});