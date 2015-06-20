/**
 * Created by scastillo on 6/20/15.
 */
angular.module("main")
    .controller("ProductoCtrl", ["$scope", "$routeParams", "ProductoSvc", "CarritoSvc", function ($scope, $routeParams, ProductoSvc, CarritoSvc) {
        $scope.categoria = $routeParams.categoriaNombre;
        $scope.productos = [];
        ProductoSvc.listar($routeParams.categoriaId).then(function (response) {
            $scope.productos = response.data;
        });
        $scope.agregar = function (item) {
            CarritoSvc.agregar(item);
        }
    }]);