forRentApp.controller("searchbarCtrl", function($scope, user, $location) {
    
    // $scope.isUserLoggedIn = function() {
    //     return user.isLoggedIn();
    // }

    // $scope.logout = function() {
    //     user.logout();
    //     $location.path("/");
    // }

    $scope.searchRooms = "0";
    $scope.searchPropType = "0";
    $scope.searchFurniture = "0";
    $scope.searchRoomMates = "1";
    $scope.searchDistance = "1";
    $scope.searchAdded = "1";
    $scope.searchSortby = "1";
    $scope.searchPropType = "1";


    $scope.showAddSearch = false;
    $scope.addvancedSearch = "Advanced search options";
    $scope.arrow = "fa fa-angle-down";

    // $(function() {
        var $tabButtonItem = $('#tab-button li'),
            $tabSelect = $('#tab-select'),
            $tabContents = $('.tab-contents'),
            activeClass = 'is-active';
      
        $tabButtonItem.first().addClass(activeClass);
        $tabContents.not(':first').hide();
      
        $tabButtonItem.find('a').on('click', function(e) {
          var target = $(this).attr('href');
      
          $tabButtonItem.removeClass(activeClass);
          $(this).parent().addClass(activeClass);
          $tabSelect.val(target);
          $tabContents.hide();
          $(target).show();
          e.preventDefault();
        });
      
        $tabSelect.on('change', function() {
          var target = $(this).val(),
              targetSelectNum = $(this).prop('selectedIndex');
      
          $tabButtonItem.removeClass(activeClass);
          $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
          $tabContents.hide();
          $(target).show();
        });
    //   });


  $scope.isShowAddSearchBar = function() {
    return $scope.isShowAddSearch;
}

//toggle on show or not show additionl search form bar
$scope.toggleAddSearchBar = function() {
    if ($scope.isShowAddSearch){
        $scope.isShowAddSearch = false;
        $scope.addvancedSearch = "Advanced search options";
        $scope.arrow = "fa fa-angle-down";
    }else{
        $scope.isShowAddSearch = true;
        $scope.addvancedSearch = "Fewer options";
        $scope.arrow = "fa fa-angle-up";
    }
}

});