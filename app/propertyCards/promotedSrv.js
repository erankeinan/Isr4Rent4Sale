app.factory("promotedSrv", function($q, $http) {


    // var promoteds = {};

    function Property(plainProp) {
        this.id = plainProp.id;
        this.promotedInd = plainProp.promotedInd;
        this.btype = plainProp.btype;
        this.type = plainProp.type;
        this.action = plainProp.action;
        this.askingprice = plainProp.askingprice;
        this.city = plainProp.city;
        this.street = plainProp.street;
        this.neighborhood = plainProp.neighborhood;
        this.zip = plainProp.zip;
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
        var promotedInd = "1";
        var getPromotedPropURL = "http://my-json-server.typicode.com/ekeinan/Isr4Rent4Sale/properties?promotedInd=" + promotedInd;
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

        // var promoted1 = {
        //     "id": 1,
        //     "promotedInd": "1",
        //     "btype": "Business",
        //     "type": "",
        //     "action": "Rent",
        //     "askingPrice": "150000",
        //     "city": "Raanana",
        //     "Street": "Hapnina 8",
        //     "neighborhood": "Raanana junction",
        //     "zip": "921921",
        //     "rooms": "",
        //     "Size": "5000",
        //     "floor":"1",
        //     "floorsnums": "3",
        //     "basement": "",
        //     "phone": "0503453455",
        //     "email": "john@john.com",
        //     "desc": "Great office area in the best location of the Sharon area where few of the most known brands are located",
        //     "comments": "100 parking spaces are available",
        //     "mainPicture": "https://images.haarets.co.il/image/fetch/w_857,h_482,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/https://www.haaretz.com/polopoly_fs/1.5561265.1514737968!/image/1018316866.jpg"
        // }

        // var promoted2 = {
        //     "id": 1,
        //     "promotedInd": "1",
        //     "btype": "Business",
        //     "type": "",
        //     "action": "Rent",
        //     "askingPrice": "150000",
        //     "city": "Raanana",
        //     "Street": "Hapnina 8",
        //     "neighborhood": "Raanana junction",
        //     "zip": "921921",
        //     "rooms": "",
        //     "Size": "5000",
        //     "floor":"1",
        //     "floorsnums": "3",
        //     "basement": "",
        //     "phone": "0503453455",
        //     "email": "john@john.com",
        //     "desc": "Great office area in the best location of the Sharon area where few of the most known brands are located",
        //     "comments": "100 parking spaces are available",
        //     "mainPicture": "https://images.haarets.co.il/image/fetch/w_857,h_482,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/https://www.haaretz.com/polopoly_fs/1.5561265.1514737968!/image/1018316866.jpg"
        // }


        // promoteds.push(promoted1);
        // promoteds.push(promoted2);
        // return promoteds;
    }

    return {
        getPromotedProp: getPromotedProp
       
    };

})