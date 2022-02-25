// funcion para agregar suma y promedio de stats al objeto copia de data
export function addStatsToObject(datasetToUse){
    let newDataPokemon = JSON.parse(JSON.stringify(datasetToUse));

    newDataPokemon.forEach((pokemonCharacter, index) => {
        let attack = parseInt(pokemonCharacter.stats['base-attack']);
        let defense = parseInt(pokemonCharacter.stats['base-defense']);
        let stamina = parseInt(pokemonCharacter.stats['base-stamina']);
        let sumStats = attack+defense+stamina;
        let meanStats = Math.round((attack+defense+stamina)/3);
        let source = {
            "sum-stats": sumStats,
            "mean-stats": meanStats,
        }
        newDataPokemon[index] = Object.assign(pokemonCharacter,source);
    });
    return newDataPokemon
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

// funcion para ordenar de la A a la Z
export function sortNameAzHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortName(pokemonName1,pokemonName2){
        return pokemonName1.name.localeCompare(pokemonName2.name); 
    }

    let sortedNamesAz = copyDatasetToUse.sort(sortName);

    return sortedNamesAz;
}

// funcion para ordenar de la Z a la A
export function sortNameZaHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortName(pokemonName1,pokemonName2){
        return pokemonName2.name.localeCompare(pokemonName1.name);  
    }

    let sortedNamesZa = copyDatasetToUse.sort(sortName);

    return sortedNamesZa;
} 

// funcion para ordenar de 0 a ...
export function sortNumAscHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortNum(pokemonNum1,pokemonNum2){
        return pokemonNum1.num.localeCompare(pokemonNum2.num);    
    }

    let sortedNumAsc = copyDatasetToUse.sort(sortNum);

    return sortedNumAsc;
}

// funcion para ordenar de 100 a ...
export function sortNumDesHandler(datasetToUse){
    const copyDatasetToUse = [...datasetToUse];
    
    function sortNum(pokemonNum1,pokemonNum2){
        return pokemonNum2.num.localeCompare(pokemonNum1.num);    
    }

    let sortedNumDes = copyDatasetToUse.sort(sortNum);

    return sortedNumDes;
}