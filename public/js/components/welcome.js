'use strict';
const ItemCarousel = (img,title,text,href) =>{
  const item = $('<div class="carousel-item white black-text" href="#'+href+'"></div>');
  const container = $('<div class="container"> </div>');
  const imagen = $('<img src="'+img+'" width="200"class="img-responsive secction">');
  const h2 = $('<h2>'+title+'</h2>');
  const p = $('<p class="black-text">'+text+'</p>');
  container.append(imagen,h2,p);
  item.append(container);
  return item;
};

const Welcome = (update) => {
  const container = $('<div> </div>');
  const carrucel = $(`<div class="carousel carousel-slider center" data-indicators="true"></div>`);
  const item1 = ItemCarousel('img/icons/group-people.png','Paga a tus amigos','Paga a quien quieras desde donde quieras, sin efectivo','one');
  const item2 = ItemCarousel('img/icons/icon-people.png','Sin número de cuenta','Elige a quién pagar desde tu lista de contactos','two');
  const item3 = ItemCarousel('img/icons/happy-person.png','Gratis y Seguro','La transferencia es inmediata y gratuita de una cuenta a otra','three');

  const btn_container = $('<div class="center"> </div>');
  const btn = $('<button class="btn waves-effect amber accent-2 white-text btn-registrarme ">Registrame</button>');


  btn_container.append(btn);

  carrucel.append(item1);
  carrucel.append(item2);
  carrucel.append(item3);

  container.append(carrucel);
  container.append(btn_container);

  btn.on('click',_=>{
    state.screenn = 1;
    console.log(state.screenn);
    update();
  });
  return container;
}
