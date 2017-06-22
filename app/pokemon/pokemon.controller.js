(function(){
    'use strict';

    angular
        .module('app')
        .controller('PokemonController', PokemonController)

    PokemonController.$inject = [];

    function PokemonController() {
        var vm = this;
    }
})();