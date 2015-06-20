/**
 * Created by scastillo on 6/20/15.
 */

angular.module("main")
    .controller("CarritoCtrl", ["$scope", "CarritoSvc", function ($scope, CarritoSvc) {
        $scope.carrito = CarritoSvc.listar();
    }]);