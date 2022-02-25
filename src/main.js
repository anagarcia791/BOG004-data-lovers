import data from './data/pokemon/pokemon.js';
import * as dataFunctions from './data.js';

window.onload = () => {

    // declaracion variables uso global
    let copyDatasetToUse = JSON.parse(JSON.stringify(data.pokemon));
    let completeDataSet = dataFunctions.addStatsToObject(copyDatasetToUse);
    
    // declaracion variable card para seccion tarjetas
    let card = document.querySelector('.section-cards');
    
    // funcion para crear tarjetas
    function createCards(datasetToUse){
        let renderString = "";
        // ciclo for para crear tarjetas
        for(let pokemonCharacter of datasetToUse){
        let cardStructure =
            `<article class="card">
                <p class="card__id">${pokemonCharacter.num}</p>
                <figure class="card__character">
                    <img class="card__image" src="${pokemonCharacter.img}" alt="character card">
                </figure>
                <article class="card__content">
                    <h3 class="card__name">${pokemonCharacter.name}</h3>
                    <p class="card__type">Type: ${pokemonCharacter.type.join(" ")}</p>
                    <p class="card__type">Power: ${pokemonCharacter["sum-stats"]}</p>
                    <p class="card__type">Mean power: ${pokemonCharacter["mean-stats"]}</p>
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
    }

    // funcion para concatenar dos arrays sin repetir elementos dentro de uno de ellos
    function addElementsToArray(array1, array2){
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
            Object.keys(filters).forEach(filterKey => {
                filters[filterKey] = 
                addElementsToArray(filters[filterKey], pokemonCharacter[filterKey])
            })
        }
        // organiza los elementos de cada seccion de filtro por orden alfabetico
        Object.keys(filters).forEach(filterKey => {
            filters[filterKey].sort(function (a, b) {
                return a.localeCompare(b);
            });
        }) 
    }

    // llamando funcion para agregar elementos a objeto filters
    createFilters(completeDataSet)
    
    // declaracion variable filterSection para seccion filtros
    let filterSection = document.querySelector('.aside-filter');

    // declaracion filterStructure vacia para crear estructura html
    let filterStructure = "";

    // funcion para crear estructura de filtros en html 
    function createFiltersStructure(filters){
        // ciclo para crear las secciones de filtros de acuerdo 
        // a caracteristicas establecidas
        for(let[listkey, listValues] of Object.entries(filters)){
            let values = "";
            listValues.forEach((value,index)=>{
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
            `<div class="filter__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="filter__content">
                <h2>Filter by:</h2>
                <section class="filter__item">
                    <h3>${listkey}</h3>
                    <ul>
                        ${values}
                    </ul>
                </section>
            </div>`
        }
        // inserta estructura filtros
        filterSection.innerHTML = filterStructure;
    }
    
    // llamado funcion para crear estructura de filtros en html 
    createFiltersStructure(filters)
    
    // funcion para mostrar informacion organizada de acuerdo a la seleccion
    function selectedSortOption(datasetToUse){
        // declaracion sortOption para evento orden
        let sortOption = document.querySelector('#sortOption');
        sortOption.addEventListener('click', ()=>{
            let optionValue = sortOption.value;
            let sortedNamesResult1;
            switch (true) {
                case (optionValue === "nameAsc") :
                    sortedNamesResult1 = dataFunctions.sortNameAzHandler(datasetToUse);
                    return createCards(sortedNamesResult1);
                case (optionValue === "nameDes") :
                    sortedNamesResult1 = dataFunctions.sortNameZaHandler(datasetToUse);
                    return createCards(sortedNamesResult1);
                case (optionValue === "numAsc") :
                    sortedNamesResult1 = dataFunctions.sortNumAscHandler(datasetToUse);
                    return createCards(sortedNamesResult1);
                case (optionValue === "numDes") :
                    sortedNamesResult1 = dataFunctions.sortNumDesHandler(datasetToUse);
                    return createCards(sortedNamesResult1);
            }
        })
    }

    // declaracion filterCheck para controlar el evento de check
    let filterCheck = document.querySelectorAll('.filter__check');
    
    // ciclo para encontrar los filtros a los que se les aplica check 
    filterCheck.forEach((checkBox)=>{
        checkBox.onchange = (event) => {
            let filteredPokemonsResult = dataFunctions.filterHandler(event.target.value,event.target.checked,completeDataSet);
            createCards(filteredPokemonsResult);
            selectedSortOption(filteredPokemonsResult);
        };
        
    });

    // declaracion backdrop para fondo blur con filtros en mobile
    let backdrop = document.querySelector('.backdrop');
    // declaracion filterOption para de click al boton y poder seleccionar filtro
    let filterOption = document.querySelector('#filterOption');
    filterOption.addEventListener('click',()=>{
        backdrop.style.display= "block";
        filterSection.style.display= "block";
        document.body.style.scroll = "hidden";
    });

    // declaracion filterClose para evento de cierre de boton en version mobile
    let filterClose = document.querySelector('.filter__close'); 
    filterClose.addEventListener('click',()=>{
        backdrop.style.display= "none";
        filterSection.style.display= "";
    });

    // evento de cierre de filtro dando click en la parte de backdrop
    backdrop.addEventListener('click',()=>{
        backdrop.style.display= "none";
        filterSection.style.display= "";
    });

    // llamado funcion para mostrar informacion organizada de acuerdo a la seleccion para toda la data
    selectedSortOption(completeDataSet);
}