import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(data.pokemon[0].name);
console.log(data.pokemon[0].generation.name);
console.log(data.pokemon[0].generation.num);

window.onload = () => {
    let card = document.querySelector('.card_container');
    let cardStructure =
    `<p class="card_Id">${data.pokemon[2].num}</p>
    <img class="card_character" src="${data.pokemon[2].img}" alt="character card">
    <article class="card_2nd_cont">
        <h3 class="card_name">${data.pokemon[2].name}</h3>
        <img class="card_type_icon" src="https://cdn-icons-png.flaticon.com/512/427/427112.png" alt="icon type card">
        <p class="card_type">${data.pokemon[2].type}</p>
    </article>`

    card.innerHTML = cardStructure;
}