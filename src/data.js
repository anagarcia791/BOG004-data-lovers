// importacion data y funciones data.js
import dataPokemon from './data/pokemon/pokemon.js';

// declaracion activeFilters para adicionar el valor de los filtros seleccionados 
let activeFilters = [];

// funcion para filtrar por tipo de pokemon
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

// funcion para ordenar de la A a la Z
export function sortNameAzHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortName(pokemonName1,pokemonName2){
        return pokemonName1.name.localeCompare(pokemonName2.name);    
        // if (pokemonName1.name < pokemonName2.name) {return -1;}
        // if (pokemonName1.name > pokemonName2.name) {return 1;}
        // return 0;
    }

    var sortedNamesAz = copyDatasetToUse.sort(sortName);
    // console.log(sortedNamesAz);
    return sortedNamesAz;
}

// funcion para ordenar de la Z a la A
export function sortNameZaHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortName(pokemonName1,pokemonName2){
        return pokemonName2.name.localeCompare(pokemonName1.name);  
    }

    var sortedNamesZa = copyDatasetToUse.sort(sortName);
    // console.log(sortedNamesZa);
    return sortedNamesZa;
} 

// funcion para ordenar de 0 a ...
export function sortNumAscHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortNum(pokemonNum1,pokemonNum2){
        return pokemonNum1.num.localeCompare(pokemonNum2.num);    
    }

    var sortedNumAsc = copyDatasetToUse.sort(sortNum);
    // console.log(sortedNumAsc);
    return sortedNumAsc;
}

// funcion para ordenar de 100 a ...
export function sortNumDesHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortNum(pokemonNum1,pokemonNum2){
        return pokemonNum2.num.localeCompare(pokemonNum1.num);    
    }

    var sortedNumDes = copyDatasetToUse.sort(sortNum);
    // console.log(sortedNumDes);
    return sortedNumDes;
}