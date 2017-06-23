(function(){
    'use strict';

    angular
        .module('app')
        .controller('PokemonController', PokemonController)

    PokemonController.$inject = ['pokemonFactory'];

    function PokemonController(pokemonFactory) {
        var vm = this;

        activate();

        function activate() {
            pokemonFactory
                .getAllPokemon()
                .then(function(pokemon){
                   vm.pokemon = pokemon;
                 });   
        }
    
    }
})();