// importacion data y funciones data.js
import data from './data/pokemon/pokemon.js';

// Función para filtra los Pokémon segun su región
export const RegionFilter = (dataSet, region) => {
  return dataSet.filter((selectedRegion => (selectedRegion.generation.name === region)));
}

// Función para filtra los Pokémon segun su tipo
export const TypeFilter = (dataSet, type) => {
  return dataSet.filter((selectedData) => (selectedData.type.includes(type)));
}

// declaracion activeFilters para adicionar el valor de los filtros seleccionados 
let activeFilters = [];
// declaracion filteredPokemons dataset que incluye unicamente lo seleccionado 
let filteredPokemons = data.pokemon; //completeDataSet;

export function filterHandler(filter,checked){
    //console.log(filter,checked);
    activeFilters = 
        checked
            ? [...activeFilters,filter]
            : activeFilters.filter(value => value!==filter)
            //console.log(activeFilters,filter)
            //console.log(activeFilters)
    //filteredPokemons = completeDataSet.filter(pokemon => 
    filteredPokemons = data.pokemon.filter(pokemon =>
        activeFilters.reduce(
            (accumulator, activeFilter) => 
                pokemon.type.includes(activeFilter)||accumulator,
                false
                //se devuelve un valor false true para filtrar solo los que tienen
                //true que deben ser igual a los que tienen el filtro activo
        )
    )
    // return filteredPokemons;
    // createCards(filteredPokemons);
}