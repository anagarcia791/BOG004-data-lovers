// importacion data y funciones data.js
// import { TypeFilter, RegionFilter } from './data.js';
// import * as dataFunctions from './data.js';
import data from './data/pokemon/pokemon.js';

window.onload = () => {
    //let filteredOutData;
    //filteredOutData = TypeFilter(data.pokemon, "dragon")
    //filteredOutData = RegionFilter(data.pokemon, "kanto")
    //console.log(filteredOutData);

    // declaracion variables uso global
    let completeDataSet = data.pokemon;
    let character = "";

    // declaracion variable card para seccion tarjetas
    let card = document.querySelector('.content-section');

    // funcion para crear tarjetas
    function createCards(datasetToUse){
        let renderString = "";
        // ciclo for para crear tarjetas
        for(character of datasetToUse){
            // console.log(character);
            let cardStructure =
            `<article class="card">
                <p class="card__id">${character.num}</p>
                <figure class="card__character">
                    <img class="card__image" src="${character.img}" alt="character card">
                </figure>
                <article class="card__content">
                    <h3 class="card__name">${character.name}</h3>
                    <p class="card__type">Type: ${character.type.join(" ")}</p>
                </article>
            </article>`
            renderString += cardStructure;
        }
        card.innerHTML = renderString;
    }
    
    // llamado funcion para crear tarjetas en html
    createCards(completeDataSet)

    // declaracion objeto filtros segun HU3
    let filters = {
        "type":[],
        // "resistant":[],
        // "weaknesses":[]
    }

    // funcion para concatenar dos arrays sin repetir elementos dentro de uno de ellos
    function addElementsToArray(array1, array2){
        // console.log(array1,array2,character.name);
        array2.forEach(item => {
            if(!array1.includes(item)){
                array1.push(item);
            }
        }); 
        return array1
    }
    
    // funcion para agregar y ordenar los elementos al objeto de filtros 
    // y cada uno de sus array
    function createFilters(datasetToUse){
        // ciclo para recorrer todos los elementos de datasetToUse y obtener filtros
        for(let pokemonCharacter of datasetToUse){
            // obtiene elementos(tipos-resistencia-debilidad) 
            // para cada seccion de filtros
            Object.keys(filters).forEach(filter => {
                filters[filter] = 
                addElementsToArray(filters[filter], pokemonCharacter[filter])
            })
        }
        // console.log(Object.keys(filters));
        // console.log(filters);

        // organiza los elementos de cada seccion de filtro por orden alfabetico
        Object.keys(filters).forEach(filter => {
            filters[filter].sort(function (a, b) {
                // console.log(a.localeCompare(b));
                return a.localeCompare(b);
            });       
        }) 
    }

    // llamando funcion para agregar elementos a objeto filters
    createFilters(completeDataSet)
    
    // declaracion variable filterSection para seccion filtros
    let filterSection = document.querySelector('.block-filter');

    // declaracion filterStructure vacia para crear estructura html
    let filterStructure = "";

    // funcion para crear estructura de filtros en html 
    function createFiltersStructure(filters){
        // ciclo para crear las secciones de filtros de acuerdo 
        // a caracteristicas establecidas
        for(let[listkey, listValues] of Object.entries(filters)){
            // console.log(listkey, listValues);
            let values = "";
            listValues.forEach((value,index)=>{
                // console.log(value,index);
                values+=
                `<li>
                    <input type="checkbox" class="filter__check" 
                        value="${value}" id="${listkey}${index}" >
                    <label for="${listkey}${index}">${value}</label>
                </li>
                `
            })
            // crea estructura de cada seccion de filtro
            filterStructure+=
            `<section class="filter__item">
                <h2>${listkey}</h2>
                <ul>
                    ${values}
                </ul>
            </section>`
        }
        // inserta estructura filtros
        filterSection.innerHTML = filterStructure;
    }
    
    // llamado funcion para crear estructura de filtros en html 
    createFiltersStructure(filters)

    // declaracion filterCheck para controlar el evento de check
    let filterCheck = document.querySelectorAll('.filter__check');
    // console.log(filterCheck);   
    
    // declaracion activeFilters para adicionar el valor de los filtros seleccionados 
    let activeFilters = [];

    // declaracion filteredPokemons dataset que incluye unicamente lo seleccionado 
    let filteredPokemons = completeDataSet; //data.pokemon; //completeDataSet; valor de inicio

    //función para detectar seleccion y agregar los elementos seleccionados a activeFilters
    function filterHandler(filter,checked){
        console.log(filter,checked);
        activeFilters = 
            checked
                ? [...activeFilters,filter]
                : activeFilters.filter(value => value!==filter)
                //console.log(activeFilters,filter)
                //console.log(activeFilters)
        filteredPokemons = completeDataSet.filter(pokemon => 
        //filteredPokemons = data.pokemon.filter(pokemon =>
            activeFilters.reduce(
                (accumulator, activeFilter) => 
                    pokemon.type.includes(activeFilter)||accumulator,
                    false
                    //se devuelve un valor false true para filtrar solo los que tienen
                    //true que deben ser igual a los que tienen el filtro activo
            )
        )
        // return filteredPokemons;
        createCards(filteredPokemons);
    }

    // ciclo para encontrar los filtros a los que se les aplica check 
    filterCheck.forEach((element)=>{
        // console.log(element)
        element.onchange = (event) => {
            //dataFunctions.filterHandler(event.target.value,event.target.checked)
            filterHandler(event.target.value,event.target.checked)
            // console.log(event.target.value)
            // console.log(event.target.checked)
            // console.log(filteredPokemons.length)
        };
    })

}