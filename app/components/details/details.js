angular.module('detailss',[])
.component('detailss',{
    templateUrl: './app/components/details/details.html',
    controller: function($routeParams, Productos,$location,$sce){
        this.volver = function(){
            $location.url('/');
        }

        this.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
        
        Productos.getDetail($routeParams.name)
            .then(res => { return res.data.data})
            .then(response => {
                this.image = response.image;
                this.name = response.name;
                this.price = response.price;
                this.description = response.description;
            })
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