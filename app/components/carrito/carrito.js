angular.module('carrito',[])
.component('carrito',{
    templateUrl: './app/components/carrito/carrito.html',
    bindings: {
        datos: '='
    },
    controller: function(Productos,$location){
        this.cart = 14900;
        this.items = 1;
        this.total = 0;

        this.productos = [
            {name:'Chilito 30 cm',price:'14900'},
            {name:'Chilito 20 cm',price:'11900'},
            {name:'Libro chilito papel picado',price:'14900'},
            {name:'Libro chilito por el mundo',price:'12900'}
        ]

        this.volver = function(){
            $location.url('/');
        }
    }
})
.factory('Productos', function($http)
{
	return {
		get: function(){
			return $http({
                url: 'http://localhost:4000/product',
				method: 'GET',
				headers: {'Accept': 'application/json;'}
			})
		},
        getDetail: function(nameUrl){
            return $http({
                url: 'http://localhost:4000/product/' + nameUrl,
				method: 'GET',
				headers: {'Accept': 'application/json;'}
            })
        }
	}
})