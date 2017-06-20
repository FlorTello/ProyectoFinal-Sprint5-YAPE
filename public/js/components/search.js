'use strict';

const Search = (update) => {
  const container = $('<div class="container-fluid">');
  const search = $('<div class="row">');
  const col = $('<div class="input-field col s12">');
  const input = $('<input id="search" class = "col s9 l9" type="search" placeholder="Ingrese nombre de Pokemon" required>');
  const label = $('<label class="label-icon" for="search"><i class="material-icons">search</i></label>');
  const order = $('<span class="waves-effect waves-light btn right col s2 l1 green darken-2">A-Z</span>');
  const result = $('<div class="result"></div>');

  col.append(input,label,order);
  search.append(col,result);

  input.on('keyup',(e) => {
  const filteredPokemon = filterByName(state.pokemon,input.val());
    const filter = input.val();
    console.log(filter[0]);
    reRender(result,filteredPokemon,update);
  });
  order.on('click', _ => {
    const ordePokemon = sortPokemon(state.pokemon);
    console.log(ordePokemon[0]);
    reRender(result,ordePokemon,update);
  });
  reRender(result,state.pokemon,update);

  container.append(search);

  return container;

}

const PokemonItem = (pokemon,update) => {
  const item = $(`<div class="item col s7 offset-s2 l2 m3 blue-grey lighten-5 section" id="${pokemon.entry_number}"></div>`);
  const name = $('<h6 class="item-name">'+pokemon.pokemon_species.name.charAt(0).toUpperCase()+pokemon.pokemon_species.name.substring(1)+'</h6>');
  const image = $(`<img class="section" data-target="modal1" src="http://serebii.net/art/th/${pokemon.entry_number}.png" alt="${pokemon.pokemon_species.name}" />`);
  const image_bottom = $('<img class="fondo-img" src="../assets/img/fondo-img.png" alt="">');
  const icon1 = $('<img class="icon-item icon1" src="../assets/icon/pokeball_gray.png" alt="">');
  const icon2 = $('<img class="icon-item icon2" src="../assets/icon/valentines-heart.png" alt="">');
  const icon3 = $('<img class="icon-item icon3" src="../assets/icon/data.png" alt="">');

  item.on('click',(e) => {
    e.preventDefault();
    $('.modal-content').remove();
    obtenerNombre('pokemon',pokemon.entry_number);
    obtenerNombre('pokemon-species',pokemon.entry_number);
    PokemonModal(pokemon.entry_number,$('.modal'),update);
    setTimeout(_=>{
    },2000);
    update();
  });

  item.append(image);
  item.append(image_bottom);
  item.append(icon1);
  item.append(icon2);
  item.append(icon3);
  item.append(name);
  // item.append(district);
  // item.append(button);

  return item;
}

const reRender = (container,filteredPokemon,update) => {
  container.empty();
  if (filteredPokemon.length > 0) {
    $.each(filteredPokemon,(index,pokemon) => {
      container.append(PokemonItem(pokemon,update));
    });
  } else {
    container.append($('<p>Pokemon no encontrado</p>'));
  }
}
