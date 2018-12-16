forRentApp.controller("signupCtrl", function($scope, $location, user) {
    
    // $scope.email = "eran@keinan.com";
    // $scope.pwd = "1111";

    // $scope.invalidLogin = false;

    // $scope.login = function() {
    //     $scope.invalidLogin = false;

    //     user.login($scope.email, $scope.pwd).then(function() {
    //         // success login
    //         $location.path("/")
    //     }, function(error) {
    //         // failed login
    //         $scope.invalidLogin = true;
    //     })
    // }
    $scope.email = "";
    $scope.pwd = "";


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
                else if ($scope.pwd.length ==0)
                    {
                        window.alert("Please fill the password")
                        x=0;
                    }    
                    else if ($scope.cpwd.length ==0)
                    {
                        window.alert("Please fill the confirm password")
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