forRentApp.controller("chosenpropCtrl", function($scope, chosenpropSrv, $location, $log) {

    $scope.propImages = [];


    // Selected specific property images  
    chosenpropSrv.getPropImages($routeParams.propId).then(function(propImages) {
        console.log("inside " + $routeParams.propId);
        
        $scope.propImages = propImages;
        var prt = JSON.stringify($scope.propImages);
        console.log(prt);

    }, function(error) {
    $log.error(error);
    });


   $scope.ImgEnlarge = function(imgItem) {
    $scope.currentImg = imgItem;
    $("#propModal").modal({backdrop: true});
    $("#propModal").modal({display: true});
  };      


});