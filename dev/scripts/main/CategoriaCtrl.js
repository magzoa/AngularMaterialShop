/**
 * Created by scastillo on 6/20/15.
 */
angular.module("main")
    .controller("CategoriaCtrl", ["$scope", "CategoriaSvc", function ($scope, CategoriaSvc) {
        $scope.categorias = [];
        CategoriaSvc.listar().then(function (response) {
            $scope.categorias = response.data;
        })
    }]);