app.factory("promotedSrv", function($q, $http) {


    // var promoteds = {};

    function Property(plainProp) {
        this.id = plainProp.id;
        this.promotedInd = plainProp.promotedInd;
        this.btype = plainProp.btype;
        this.type = plainProp.type;
        this.action = plainProp.action;
        this.askingprice = plainProp.askingPrice;
        this.city = plainProp.city;
        this.street = plainProp.street;
        this.neighborhood = plainProp.neighborhood;
        this.zip = plainProp.zip;
        this.rooms = plainProp.rooms;
        this.size = plainProp.size;
        this.floor = plainProp.floor ;
        this.floorsnums = plainProp.floorsnums ;
        this.basement = plainProp.basement ;
        this.phone = plainProp.phone ;
        this.email = plainProp.email ;
        this.desc = plainProp.desc ;
        this.comments = plainProp.comments ;
        this.mainPicture = plainProp.mainPicture;
    }


    function getPromotedProp(){
        var async = $q.defer();
        var promotedInd = "1";
        var getPromotedPropURL = "https://my-json-server.typicode.com/erankeinan/Isr4Rent4Sale/properties?promotedInd=" + promotedInd;
        var promoteds = [];

        $http.get(getPromotedPropURL).then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                var promoted = new Property(response.data[i]);
                promoteds.push(promoted);
            }
            async.resolve(promoteds);
        }, function(error) {
            async.reject(error);
        });    
    
        return async.promise;

        
    }

    return {
        getPromotedProp: getPromotedProp
       
    };

})