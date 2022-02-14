// importacion data y funciones data.js
import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
// console.log(data.pokemon[5].name);
// console.log(data.pokemon[5].generation.name);
// console.log(data.pokemon[5].generation.num); 

window.onload = () => {
    // declaracion variables
    let card = document.querySelector('.content-section');
    let filterSection = document.querySelector('.filter');
    let character= "";
    let filterStructure= "";
    let filters = {
        "type":[],
        "resistant":[],
        "weaknesses":[]
    }

    // ciclo for para crear tarjetas
    for(character of data.pokemon){
        let cardStructure =
        `<article class="card">
            <p class="card__id">${character.num}</p>
            <figure class="card__character">
                <img class="card__image" src="${character.img}" alt="character card">
            </figure>
            <article class="card__content">
                <h3 class="card__name">${character.name}</h3>
                <p class="card__type">${character.type.join(", ")}</p>
            </article>
        </article>`
        card.innerHTML += cardStructure;

        // obtiene valores para cada seccion de filtros
        Object.keys(filters).forEach(filter => {
            filters[filter] = addElementsToArray(filters[filter], character[filter])
        }) 
    }
    // console.log(Object.keys(filters));
    // let otra= filters;
    // console.log(otra);

    // funcion para concatenar dos arrays sin repetir valores
    function addElementsToArray(array1, array2){
        // console.log(array1,array2,character.name);
        array2.forEach(item => {
            if(!array1.includes(item)){
                array1.push(item);
            }
        }); 
        return array1
    }

    // organiza los elementos de cada seccion de filtro por orden alfabetico
    Object.keys(filters).forEach(filter => {
        filters[filter].sort(function (a, b) {
            // console.log(a.localeCompare(b));
            return a.localeCompare(b);
        });       
    })  
    
    // ciclo para crear las secciones de filtros de acuerdo a caracteristicas establecidas
    for(let[listkey, listValues] of Object.entries(filters)){
        // console.log(listkey, listValues);
        let values = "";
        listValues.forEach((value,index)=>{
            // console.log(value,index);
            values+=
            `<li>
                <input type="checkbox" id="${listkey}${index}" ><label for="${listkey}${index}">${value}</label>
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

    // insertar estructura filtros
    filterSection.innerHTML = filterStructure;
}