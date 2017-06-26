angular.module('tienda',['ngDialog'])
.component('tienda',{
    templateUrl: './app/components/tienda/tienda.html',
    controller: function(Productos,$location){

        Productos.get()
            .then(data => { return data.data })
            .then(response => {return response.data})
            .then(res =>{
                this.productos = res;
            })

        this.details = function(name){

            $location.url('/product/'+name)
            
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