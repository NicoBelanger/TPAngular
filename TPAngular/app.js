/**
 * Created by Nicolas on 23/01/2016.
 */
angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.

        when('/modifyElement', {
            resolve: {
                "check": function($location, $rootScope){
                    if(!$rootScope.logged)
                    {
                        $location.path("/login");
                    }
                    else if($rootScope.SelectedItem == null)
                    {
                        $location.path("/stockManager");
                    }
                }
            },
            templateUrl: 'Views/modifyElement.view.html',
        }).

        when('/requisition', {
            resolve: {
                "check": function($location, $rootScope){
                    if(!$rootScope.logged)
                    {
                        $location.path("/login");
                    }
                    else if($rootScope.SelectedItem == null)
                    {
                        $location.path("/stockManager");
                    }
                }
            },
            templateUrl: 'Views/requisition.view.html',
        }).

        when('/stockManager', {
            resolve: {
                "check": function($location, $rootScope){
                    if(!$rootScope.logged)
                    {
                        $location.path("/login");
                    }
                }
            },
            templateUrl: 'Views/stockManager.view.html',
        }).

        when('/addElement', {
            resolve: {
                "check": function($location, $rootScope){
                    if(!$rootScope.logged)
                    {
                        $location.path("/login");
                    }
                }
            },
            templateUrl: 'Views/addElement.view.html',
        }).

        otherwise({
            templateUrl: 'Views/login.view.html'
        });
}]);