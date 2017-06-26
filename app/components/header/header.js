angular.module('headerComponents',[])
.component('headerComponents',{
    templateUrl: './app/components/header/header.html',
    bindings: {
        datos: '='
    },
    controller: function(){
        var vm = this;
        vm.name = "Luis Vilches";
        vm.click = function(){
            alert('hola');
        }

        //button collapse
        $( document ).ready(function(){
            $(".button-collapse").sideNav();
        });

        //slider
        $(document).ready(function(){
            $('.slider').slider({full_width: true});
        });

        //modal
        $(document).ready(function(){
            $('.modal-trigger').leanModal();
        });
    }
})