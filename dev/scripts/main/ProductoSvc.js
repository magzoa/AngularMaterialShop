/**
 * Created by scastillo on 6/20/15.
 */

angular.module("main")
    .factory("ProductoSvc", ["$http", function ($http) {

        return {
            listar: function (categoryId) {
                return $http.get("/products/category/" + categoryId);
            }
        };
    }]);