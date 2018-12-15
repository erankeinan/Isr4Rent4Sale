forRentApp.controller("chosenpropCtrl", function($scope, $routeParams,chosenpropSrv, $location, $log, $sce) {

    $scope.propImages = [];
    $scope.activeIndex = 0;
    $scope.rentInd = "";

    // $scope.property = {};

    // Selected specific property images  
    chosenpropSrv.getPropImages($routeParams.propId).then(function(propImages) {
        console.log("inside " + $routeParams.propId);
        
        $scope.propImages = propImages;
        var prt = JSON.stringify($scope.propImages);
        console.log(prt);
      
    }, function(error) {
    $log.error(error);
    });


    chosenpropSrv.getPropDtls($routeParams.propId).then(function(property) {
        console.log("inside " + $routeParams.propId);
        $scope.property = property;
        if (property.action==='Rent') {$scope.rentInd = 'Monthly'}
        var prt = JSON.stringify($scope.property);
        console.log(prt);

        var address = $scope.property.street + "," +  $scope.property.city + ",Israel" ;
        if (address){
        console.log(address);

        $scope.googleMapURL = $sce.trustAsResourceUrl(
          "https://www.google.com/maps/embed/v1/place?q="+address+"&key=AIzaSyCbI_-Y0NkPIJ6wLCQNBMpl-fP5x-oNU6o");
          }else{
          // $location.path("#"); 
          }

    });
 

  
   $scope.ImgEnlarge = function(imgItem) {
    $scope.currentImg = imgItem;
    $("#propModal").modal({backdrop: true});
    $("#propModal").modal({display: true});
  };      


  $scope.nextImg = function(activeIndex, propImages) {
      if (activeIndex === propImages.length -1) {
        $scope.activeIndex = 0;
      }
      else{
        $scope.activeIndex +=1;
      }
    
  };

  $scope.prevImg = function(activeIndex, propImages) {
    if (activeIndex === 0) {
      $scope.activeIndex = propImages.length -1;
    }
    else{
      $scope.activeIndex -=1;
    }
  
  };  

  // $scope.showmap = function(){
  //     var address = $scope.property.street + " , " +  $scope.property.city + " , Israel" ;
  //     if (address){
  //     console.log(address);

  //     $scope.googleMapURL = $sce.trustAsResourceUrl(
  //       "https://www.google.com/embed/v1/place?key=AIzaSyCbI_-Y0NkPIJ6wLCQNBMpl-fP5x-oNU6o=" + address);
  //   }else{
  //     $location.path("/"); //TODO: to put a message that map is not available
  //   }
  // };


  // carSrv.getAll().then(function(cars) {
  //   if (parseInt($routeParams.carIndex) >= 0 && parseInt($routeParams.carIndex) < cars.length) {
  //     $scope.car = carSrv.getByIndex($routeParams.carIndex);
  //     $scope.googleMapURL = $sce.trustAsResourceUrl(
  //       "https://www.google.com/embed/v1/place?key=AIzaSyDYss1RsxvYgPMb80w568QggvjYoTojd6Q&q=" + 
  //         $scope.car.address);
  //   } else {
  //     $location.path("/"); 
  //   }
  // });

});