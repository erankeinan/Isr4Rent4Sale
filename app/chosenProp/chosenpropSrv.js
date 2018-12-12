forRentApp.factory("chosenpropSrv", function($http, $log, $q) {

    function getPropImages(propid) {
      
        var async = $q.defer();   
        var propImages = [];

        var propertImagesURL = "https://my-json-server.typicode.com/erankeinan/Isr4Rent4Sale/propertyimages?propId=" + propid;

        console.log(" link: " + propertImagesURL);

        $http.get(propertImagesURL).then(function(response) {

            propImages = response.data.message;                                
            var prt = JSON.stringify(response);
            console.log(prt);

            async.resolve(propImages);

            }, function(error) {
            // error
            async.reject(error);
            });
            
        return async.promise;

      }//end of getPropImages

      return {
        getPropImages: getPropImages
      };



});
