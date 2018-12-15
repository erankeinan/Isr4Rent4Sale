forRentApp.controller("chosenpropCtrl", function($scope, $routeParams,chosenpropSrv, $location, $log) {

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

  

});