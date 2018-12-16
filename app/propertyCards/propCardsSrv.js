forRentApp.factory("propCardsSrv", function($q, $http) {


    // var promoteds = {};
    var promoteds = [];
    var filteredpromoteds = []; 
    var properties= [];


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
        this.furniture = plainProp.furniture,
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
        promoteds = [];

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

    function getAllProp(){
        var async = $q.defer();
        
        var getPropURL = "https://my-json-server.typicode.com/erankeinan/Isr4Rent4Sale/properties";
        properties = [];

        $http.get(getPromotedPropURL).then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                var property = new Property(response.data[i]);
                properties.push(property);
            }
            async.resolve(properties);
        }, function(error) {
            async.reject(error);
        });    
    
        return async.promise;
        
    } 


    // function filterProp(action, promotedInd, btype, type, minPrice, maxPrice, rooms, furniture){
        
    //     for (var i = 0; i < properties.length; i++) {
    //         if (
    //             (action? properties[i].action === action&&)
    //             (promotedInd? properties[i].promotedInd === promotedInd&&)
    //             (btype? properties[i].btype===btype&&)
    //             (type? properties[i].type===type&&)
    //             (minPrice? properties[i]. askingprice >=minPrice&&)
    //             (maxPrice? properties[i].askingprice <= maxPrice&&)
    //             (rooms? properties[i].rooms === rooms&&)
    //             (furniture? properties[i].furniture === furniture&&)
    //             1===1)
            
    //     }
        
    // }


    // function getPromotedPropVars(searchRooms, searchPropType, searchFurniture){
    //     var async = $q.defer();
    //     var promotedInd = "1";

    //     var getPromotedPropURL = "https://my-json-server.typicode.com/erankeinan/Isr4Rent4Sale/properties?promotedInd="+ promotedInd
    //     + (searchRooms? "&rooms=" + searchRooms:'')
    //     + (searchPropType? "&type=" + searchPropType:'')
    //     + (searchFurniture? "&furniture=" + searchFurniture:"");

    //     var promoteds = [];

    //     $http.get(getPromotedPropURL).then(function(response) {
    //         for (var i = 0; i < response.data.length; i++) {
    //             var promoted = new Property(response.data[i]);
    //             promoteds.push(promoted);
    //         }
    //         async.resolve(promoteds);
    //     }, function(error) {
    //         async.reject(error);
    //     });    
    
    //     return async.promise;

        
    // }

    // return {
    //     getPromotedProp: getPromotedProp,
    //     getPromotedPropVars: getPromotedPropVars
       
    // };

    return {
        getPromotedProp: getPromotedProp,
        getAllProp: getAllProp
       
    };

})