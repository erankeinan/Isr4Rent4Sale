forRentApp.factory("chosenpropSrv", function($http, $log, $q) {

    function getPropImages(propid) {
      
        var async = $q.defer();   
        var propImages = [];

        var propertImagesURL = "https://my-json-server.typicode.com/erankeinan/Isr4Rent4Sale/propertyimages?propId=" + propid;

        console.log(" link: " + propertImagesURL);

        $http.get(propertImagesURL).then(function(response) {

            propImages = response.data[0].pimgs;                                
            var prt = JSON.stringify(response);
            console.log(prt);

            async.resolve(propImages);

            }, function(error) {
            // error
            async.reject(error);
            });
            
        return async.promise;

      }//end of getPropImages

      
    


      function getPropDtls(propid) {
      
        var async = $q.defer();   
        // var property = [];

        var propertyURL = "https://my-json-server.typicode.com/erankeinan/Isr4Rent4Sale/properties?id=" + propid;

        console.log(" link: " + propertyURL);

        $http.get(propertyURL).then(function(response) {

            var property = response.data[0];                                
            var prt = JSON.stringify(response);
            console.log(prt);

            async.resolve(property);

            }, function(error) {
            // error
            async.reject(error);
            });
            
        return async.promise;

      }//end of getPropImages

      return {
        getPropDtls: getPropDtls,
        getPropImages: getPropImages
      };

});
