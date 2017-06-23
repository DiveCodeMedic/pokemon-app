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
            return $http
            .get('http://pokemon.origincodeacademy.com/api/v2/pokemon')
            .then(function(response) {
                return response.data.results;
            });
         }

        //  getPokemonById(1) // bulbasaur
        //  getPokemonById(2) //

         function getPokemonById(id){
            return $http
            .get('http://pokemon.origincodeacademy.com/api/v2/pokemon' + id)
            .then(function(response) {
                return response.data;
            });
         }
    }
})();