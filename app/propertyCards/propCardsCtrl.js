app.controller("propCardsCtrl", function($scope, promotedSrv, $location, $log) {
    
    $scope.promoteds = [];

    promotedSrv.getPromotedProp().then(function (promoteds) {
        $scope.promoteds = promoteds;
    }, function(error) {
        $log.error(error);
    });

    // var promoteds = [];

    // var promoted = {
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

    

    // promoteds.push(promoted);
    // $scope.promoteds = promoteds;

    
});