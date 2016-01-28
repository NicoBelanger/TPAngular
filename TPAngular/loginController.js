angular.module('app').controller('loginController', function($scope, $location, $rootScope){

    $scope.submit = function()
    {
        if($scope.username != null && $scope.password == "password")
        {
            $rootScope.uname = $scope.username;
            $rootScope.logged = true;
            $location.path("/stockManager");
        }
        else
        {
            alert("Wrong username/password");
        }
    };
});
