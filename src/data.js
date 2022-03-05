// funcion para agregar suma y promedio de stats al objeto copia de data
export function addStatsToObject(datasetToUse){
    let newDataPokemon = JSON.parse(JSON.stringify(datasetToUse));

    newDataPokemon.forEach((pokemonCharacter, index) => {
        let attack = parseInt(pokemonCharacter.stats['base-attack']);
        let defense = parseInt(pokemonCharacter.stats['base-defense']);
        let stamina = parseInt(pokemonCharacter.stats['base-stamina']);
        let sumStats = attack+defense+stamina;
        let meanStats = Math.round((attack+defense+stamina)/3);
        let newDataPokemonObject = {
            "sum-stats": sumStats,
            "mean-stats": meanStats,
        }
        newDataPokemon[index] = Object.assign(pokemonCharacter,newDataPokemonObject);
    });
    return newDataPokemon
}

// funcion para ordenar
export const sortHandler=(datasetToUse,pokemonFeature,way)=>{
    const copyDatasetToUse = [...datasetToUse];

    function sortName(pokemon1,pokemon2){
        return pokemon1[pokemonFeature].localeCompare(pokemon2[pokemonFeature]); 
    }

    let sortedData;
    if(way === "ASC"){
        sortedData = copyDatasetToUse.sort(sortName);
    }else{
        sortedData = copyDatasetToUse.sort(sortName).reverse();
    }

    return sortedData;
}

// declaracion activeFilters para adicionar el valor de los filtros seleccionados 
let activeFilters = [];

// funcion para filtrar por tipo de pokemon
export function filterHandler(filter, checked, data){    
    activeFilters = 
        checked
            ? [...activeFilters,filter] // checked true
            : activeFilters.filter(value => value!==filter) // checked false

    // declaracion filteredPokemons dataset que incluye unicamente lo seleccionado
    let filteredPokemons = [];
    for(let pokemonCharacter of data){
        for(let pokemonType of pokemonCharacter.type){
            if(activeFilters.includes(pokemonType) && !filteredPokemons.includes(pokemonCharacter)){
                filteredPokemons.push(pokemonCharacter);
            }
        }   
    }

    !activeFilters.length 
        ? filteredPokemons = data       // activeFilters.length = 0 true
        : filteredPokemons              // activeFilters.length diferente de 0 false
        
    return filteredPokemons;
}