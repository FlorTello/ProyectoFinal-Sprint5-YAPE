'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.screem == 0){
    console.log("ddd");
    wrapper.append(Welcome(_=>{render(root)}));
    // $('.carousel').carousel({fullWidth: true});
    // $('.carousel.carousel-slider').carousel({fullWidth: true});
  }
  if(state.screem == 1){
    console.log("ddd");
    wrapper.append(Regiter(_=>{render(root)}));
    // $('.carousel').carousel({fullWidth: true});
    // $('.carousel.carousel-slider').carousel({fullWidth: true});
  }
  // wrapper.append(Cartelera(data));

  //   $('.carousel').carousel({fullWidth: true});
  // $('.carousel.carousel-slider').carousel({fullWidth: true});
  root.append(wrapper);
}
const state = {
  clients: null,
  screem: 1
};

$( _ => {
    const root = $("#root");
    render(root);
    $('.carousel').carousel({fullWidth: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
