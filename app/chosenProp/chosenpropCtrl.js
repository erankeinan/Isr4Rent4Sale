forRentApp.controller("chosenpropCtrl", function($scope, chosenpropSrv, $location, $log) {

    $scope.propImages = [];


    // Selected specific property images  
    chosenPropSrv.getPropImages($routeParams.propId).then(function(propImages) {
        console.log("inside " + $routeParams.propId);
        
        $scope.propImages = propImages;
        var prt = JSON.stringify($scope.propImages);
        console.log(prt);

    }, function(error) {
    $log.error(error);
    });


    $scope.breedImages = [];
    //alert($routeParams.breedId);

   // Selected specific breed images  
   chosenBreedSrv.getBreedImages($routeParams.breedId).then(function(breedImages) {
        console.log("inside " + $routeParams.breedId);
        
        $scope.breedImages = breedImages;
        $scope.breedName = $routeParams.breedId;
        var prt = JSON.stringify($scope.breedImages);
        console.log(prt);

    }, function(error) {
       $log.error(error);
   });
 
   $scope.ImgEnlarge = function(breedImg) {
    $scope.currentImg = breedImg;
    $("#dogModal").modal({backdrop: true});
    $("#dogModal").modal({display: true});
  };      


});