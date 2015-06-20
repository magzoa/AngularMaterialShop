/**
 * Created by scastillo on 6/20/15.
 */
angular.module("main")
    .factory("CategoriaSvc", ["$http", function ($http) {

        return {
            listar: function () {
                return $http.get("/categories");
            }
        };
    }]);