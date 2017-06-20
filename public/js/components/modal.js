'use strict';

const PokemonModal = (id,container,update) => {
  container.empty();
  const modal_content = $('<div class="modal-content row"></div>');
  const close = $('<h1 class="close right grey-text">&times</h1>');
  const col_img = $('<div class="col s11 m4 l3 item item-modal grey lighten-2 offset-s1 offset-m1 offset-l1"></div>');
  const img = $('<img class="section pokemon" data-target="modal1" src="http://serebii.net/art/th/'+id+'.png" alt="pokemon" />');
  const image_bottom = $('<img class="fondo-img" src="../assets/img/fondo-img.png" alt="">');
  const icon1 = $('<img class="icon-item icon1" src="../assets/icon/pokeball_gray.png" alt="">');
  const icon2 = $('<img class="icon-item icon2" src="../assets/icon/valentines-heart.png" alt="">');
  const icon3 = $('<img class="icon-item icon3" src="../assets/icon/data.png" alt="">');

  const col_info = $('<div class="col s12 l7"></div>');
  const col_caracteristicas = $(' <div class="col s12 l10 teal lighten-1 item-carateristicas"></div>');

  col_img.append(img);
  col_img.append(image_bottom);
  col_img.append(icon1);
  col_img.append(icon2);
  col_img.append(icon3);
  col_img.append(name);


  $.getJSON('http://pokeapi.co/api/v2/pokemon-species/' + id, (response) => {
         const col_description = $('<div class="col s12"></div>');
         const p_description = $('<p class="">'+response.flavor_text_entries[3].flavor_text+'</p>');
         const p_categoria = $('<p class="col s5 left-align white-text">Categoria: '+ response.genera[2].genus +'</p>')
         col_description.append(p_description);
         col_info.prepend(col_description);
         col_caracteristicas.append(p_categoria);
     });

     $.getJSON('http://pokeapi.co/api/v2/pokemon/' + id, (response) => {
         const title_name = $('<h4 class="col s12 center-align ">'+response.name+'</h4>');
         const weight = $('<p class="weight-pokemon">Peso: ' + response.weight + ' kg</p>');
         const height = $('<p class="height-pokemon">Talla: ' + response.height + ' m</p>');

         const p_weight = $('<p class="col s5 left-align white-text">Peso <br> '+response.weight+'</p>');
         const p_height = $('<p class="col s5 left-align white-text">Altura:  <br>'+response.height+'</p>');
         const p_sexo = $('<p class="col s12 left-align white-text">Sexo <br>""</p>');

         const p_habilidad = $('<p class="col s5 left-align white-text">Habilidades:  <br></p>');
         
         response.abilities.forEach((e) => {
           $.getJSON(e.ability.url,function(response,error){
             const ability = $('<span>' + response.names[2].name + ' </span>');
             p_habilidad.append(ability);
           });
         });

         const types = $('<p class="types-pokemon">Tipos: </p>');
         const col_debilities = $('<div class="col s12"><h6>Debiliades</h6></div>');

         const arrayDebilities = [];
         const col_tipo = $('<div class="col s12"><h6>Tipo</h6></div>');
         response.types.forEach((data) => {
             const span_tipo = $('<span class="col l4 s5 m-d '+ data.type.name +'">'+ data.type.name +'</span>');
             col_tipo.append(span_tipo);

             $.getJSON(data.type.url, (response) => {
                 response.damage_relations.double_damage_from.forEach((elem) => {
                     arrayDebilities.push(elem.name);
                     const span_d = $('<span class="col l4 s5 m-d '+ elem.name +'">'+ elem.name +'</span>');
                     col_debilities.append(span_d);
                 });
             });
         });

         close.on('click' , _ => {
           $('.modal').modal('close');
         });

         modal_content.append(close);
         modal_content.append(title_name);
         modal_content.append(col_img);

         col_caracteristicas.append(p_height);
         col_caracteristicas.append(p_weight);
         col_caracteristicas.append(p_habilidad);
         col_caracteristicas.append(p_sexo);

         col_info.append(col_caracteristicas);

         modal_content.append(col_info);

        //  container.append(p_weight);
        //  container.append(p_height);
        //  container.append(p_habilidad);
         col_info.append(col_tipo);
         col_info.append(col_debilities);
         container.append(modal_content);

     });

     return container;

}
