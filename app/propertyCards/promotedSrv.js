app.factory("promotedSrv", function($q, $http) {


    var promoteds = {};

    function Property(plainProp) {
        this.id = plainProp.id;
        this.btype = plainProp.btype;
        this.type = plainProp.type;
        this.action = plainProp.action;
        this.address = plainProp.address;
        this.rooms = plainProp.rooms;
        this.Size = plainProp.Size;
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
        var PromotedInd = true;
        var getPromotedPropURL = "http://my-json-server.typicode.com/ekeinan/Isr4Rent4Sale/properties?PromotedInd=" + PromotedInd;
    
        $http.get(getPromotedPropURL).then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                var promoted = new Property(response.data[i]);
                promoteds.push(promoted);
            }
            async.resolve(promoteds);
        }, function(error) {
            async.reject(error);
        });
    
    
    
    
    
    }

})