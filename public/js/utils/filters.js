'use strict';

const filterByName = (pokemon,query) => {
  return pokemon.filter((e)=>{
    if(e.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) return e;
  });
}

const sortPokemon = (array) => {
  array.sort((a, b) => a.pokemon_species.name.localeCompare(b.pokemon_species.name));
  return array;
}
