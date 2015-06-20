angular.module("AngMatShop", ["lumx", "ngRoute", "main"]);

angular.module("AngMatShop").config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/categorias", {
            controller: "CategoriaCtrl",
            templateUrl: "/views/main/categoria.html"
        })
        .when("/productos/:categoriaId/:categoriaNombre", {
            controller: "ProductoCtrl",
            templateUrl: "/views/main/producto.html"
        })
        .when("/carrito", {
            controller: "CarritoCtrl",
            templateUrl: "/views/main/carrito.html"
        })
        .otherwise({
            redirectTo: "/categorias"
        });
}]);