forRentApp.controller("footerCtrl", function($scope, promotedSrv, $location, $log) {

    $scope.cookiesModal = function() {
        
        $("#cookiesModal").modal({backdrop: true});
        $("#cookiesModal").modal({display: true});
      };     

    $scope.privacyModal = function() {
    
        $("#privacyModal").modal({backdrop: true});
        $("#privacyModal").modal({display: true});
        }; 

    $scope.termsModal = function() {
    
        $("#termsModal").modal({backdrop: true});
        $("#termsModal").modal({display: true});
        }; 

    $scope.openLogin = function() {
        $("#loginModal").modal({backdrop: true});
        $("#loginModal").modal({display: true});
        };   


    $scope.contactModal = function() {

        $("#contactModal").modal({backdrop: true});
        $("#contactModal").modal({display: true});
        }; 




    function subValidateFields(){

        var x=1;
    
        if ($scope.fname.length == 0)
        {
            window.alert("Name is a required field. Please fill it.")
            x=0;
        }
        else if ($scope.lname.length ==0)
            {
                window.alert("Last Name is a required field. Please fill it.")
                x=0;
            }
            else if ($scope.email.length ==0)
                {
                    window.alert("Please fill the Email")
                    x=0;
                } 
                else ($scope.phone.length ==0)
                    {
                        window.alert("Please fill the password")
                        x=0;
                    }    

        return x;
        }
        
    function ValidateEmail()
    {
        var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
        if($scope.email.match(mailformat))
            {
                validateEmailSize();
            }
        else
        {
            window.alert("You have entered an invalid email address!");
            $scope.email = "";
        }
    }

    function validateFNameSize(){

        if($scope.fName.length>30)
        {
            alert("Name size is too big. It must be below 31 chars");
            $scope.fName = "";
        }  
    }

    function validateLNameSize(){

        if($scope.lName.length>30)
        {
            alert("Name size is too big. It must be below 31 chars");
            $scope.lName = "";
        }  
    }    

    function validatePhone(){
        //TODO: digits only and add check on up to 10 digits only 
        
          }

    function validateSave() {
        var x=0;
        x=subValidateFields();
        // alert("x:" +x);
        if (x==1)
            {
                alert("TODO submit after creating DB");
            }
        }

});