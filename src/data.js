// importacion data y funciones data.js
import dataPokemon from './data/pokemon/pokemon.js';

// declaracion activeFilters para adicionar el valor de los filtros seleccionados 
let activeFilters = [];

export function filterHandler(filter, checked, data=dataPokemon.pokemon){
    // console.log(filter,checked);
    activeFilters = 
        checked
            ? [...activeFilters,filter] // checked true
            : activeFilters.filter(value => value!==filter) // checked false
            // console.log(activeFilters,filter)
            // console.log(activeFilters)

    // declaracion filteredPokemons dataset que incluye unicamente lo seleccionado
    let filteredPokemons = [];
    for(let poke of data){
        // console.log(pokes);
        for(let pokeType of poke.type){
            if(activeFilters.includes(pokeType) && !filteredPokemons.includes(poke)){
                filteredPokemons.push(poke);
            }
        }   
    }
    // console.log(filteredPokemons);

    // console.log(activeFilters.length);
    // console.log(!activeFilters.length);
    !activeFilters.length 
        ? filteredPokemons = data       // activeFilters.length = 0 true
        : filteredPokemons              // activeFilters.length diferente de 0 false

    return filteredPokemons;
}