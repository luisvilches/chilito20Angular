angular.module('app',[
    'ngRoute',
    'headerComponents',
    'tienda',
    'videos',
    'club',
    'maps',
    'recuerdos',
    'escribeme',
    'footer',
    'detailss',
    'cart',
    'carrito'
])
.config(appConfig)




function appConfig($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: '/app/views/home.html'
        })
        .when('/product/:name',{
            templateUrl: '/app/views/detalles.html'
        })
        .when('/micarrito',{
            templateUrl: '/app/views/carrito.html'
        })
}
