(function() {

    var CustomersController = function($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            // $scope.customers = customersFactory.getCustomers();   // syncronous call
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    console.log('there was an error');
                });
        }

        init();

        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }
    };

    // If we used Minification, the $scope will get renamed and nothing would work.
    // To Fix: Use Parameter Injection Technique
    // eg. CustomersController.$inject = ['$scope', 'foo', 'bar'];
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    // Now we pass the controller off to Angular via the module
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());
