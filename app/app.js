(function() {
    var app = angular.module('customersApp', ['ngRoute']);    

    // ----------- ROUTES ------------
    // -------------------------------
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: '/app/views/customers.html'
            })

            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: '/app/views/orders.html'
            })

            .when('/editCustomer/:customerId', {
                controller: 'CustomerEditController',
                templateUrl: '/app/views/customerEdit.html'
            })

            .otherwise({ redirectTo: '/' });
    }); 

}());
