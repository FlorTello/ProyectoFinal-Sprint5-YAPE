'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.screem == 0){
    wrapper.append(Welcome(_=>{render(root)}));
  }else  if(state.screem == 1){
    wrapper.append(Regiter(_=>{render(root)}));
  }else  if(state.screem == 2){
    wrapper.append(RegisterCodigo(state.user,_=>{render(root)}));
  }
  root.append(wrapper);
}
const state = {
  user: null,
  screem: 1,
  validate: false,
  codigo: null
};

$( _ => {
    const root = $("#root");
    render(root);
    $('.carousel').carousel({fullWidth: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
