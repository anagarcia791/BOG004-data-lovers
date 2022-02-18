// importacion data y funciones data.js
import dataPokemon from './data/pokemon/pokemon.js';

// declaracion activeFilters para adicionar el valor de los filtros seleccionados 
let activeFiltersDefault = [];

export function filterHandler(filter,checked, data=dataPokemon, activeFilters=activeFiltersDefault){
    // console.log(filter,checked);
    activeFilters = 
        checked
            ? [...activeFilters,filter]
            : activeFilters.filter(value => value!==filter)
            // console.log(activeFilters,filter)
            // console.log(activeFilters)
    // declaracion filteredPokemons dataset que incluye unicamente lo seleccionado
    let filteredPokemons = data.pokemon.filter(pokemon =>
        activeFilters.reduce((accumulator, activeFilterValue) => 
            pokemon.type.includes(activeFilterValue)||accumulator,false
                // se devuelve un valor false o true para filtrar solo los que tienen true
                // que deben ser igual a los que tienen el filtro activo
        )
    )

    !activeFilters.length
        ? filteredPokemons = data.pokemon
        : filteredPokemons

    return filteredPokemons;
}


// //función para detectar seleccion y agregar los elementos seleccionados a activeFilters
// function filterHandler(filter,checked){
//     console.log(filter,checked);
//     activeFilters = 
//         checked
//             ? [...activeFilters,filter] //similar a un push como nuevo array
//             : activeFilters.filter(value => value!==filter) //saca de la lista lo que se desmarque
//             //console.log(activeFilters,filter)
//             console.log(activeFilters)

//  // let filteredPokemons = [];

//  // for(let pokes of completeDataSet){
//  //     console.log(pokes);
//  //     for(let typeSel of pokes.type){
//  //         if(activeFilters.includes(typeSel)){
//  //             filteredPokemons.push(pokes);
//  //         }
//  //     }   
//  // }

//     filteredPokemons = completeDataSet.filter(pokemon => 
//     //filteredPokemons = data.pokemon.filter(pokemon =>
//         //revisar con map
//         activeFilters.reduce(
//             (accumulator, activeFilter) => 
//                 pokemon.type.includes(activeFilter)||accumulator,
//                 false
//                 //se devuelve un valor false true para filtrar solo los que tienen
//                 //true que deben ser igual a los que tienen el filtro activo
//         )
//     )
//     // return filteredPokemons;
//     createCards(filteredPokemons);
// }