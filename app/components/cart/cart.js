angular.module('cart',[])
.component('cart',{
    templateUrl: './app/components/cart/cart.html',
    bindings: {
        datos: '='
    },
    controller: function(Productos,$location){
        this.cart = 14900;
        this.items = 1;

        this.openCart = function(){
            $location.url('/micarrito');
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