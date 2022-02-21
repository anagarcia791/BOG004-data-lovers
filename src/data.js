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
    for(let pokemonCharacter of data){
        // console.log(pokemonCharacter);
        for(let pokemonType of pokemonCharacter.type){
            if(activeFilters.includes(pokemonType) && !filteredPokemons.includes(pokemonCharacter)){
                filteredPokemons.push(pokemonCharacter);
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

export function sortNameHandler(datasetToUse){

    const copyDatasetToUse = [...datasetToUse];
    
    function sortName(pokemonName1,pokemonName2){
        return pokemonName1.name.localeCompare(pokemonName2.name);    
        // if (pokemonName1.name < pokemonName2.name) {return -1;}
        // if (pokemonName1.name > pokemonName2.name) {return 1;}
        // return 0;
    }

    var sortedNames = copyDatasetToUse.sort(sortName);
    console.log(sortedNames);
    return sortedNames
} 








