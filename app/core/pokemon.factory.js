(function(){
    'use strict';

    angular
        .module('app')
        .factory('pokemonFactory', pokemonFactory)

    pokemonFactory.$inject = ['$http'];

    function pokemonFactory($http) {
        var service = {
            getAllPokemon: getAllPokemon,
            getPokemonById: getPokemonById
        };

        return service;

        function getAllPokemon() {
         }

         function getPokemonById(id)
    }
})();