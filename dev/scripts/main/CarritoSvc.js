/**
 * Created by scastillo on 6/20/15.
 */
angular.module("main")
    .factory("CarritoSvc", [ function () {
        var _carrito = [];

        return {
            agregar: function (item) {
                item.cantidad = 1;
                _carrito.push(item);
            },
            listar: function () {
                return _carrito;
            }
        };
    }]);