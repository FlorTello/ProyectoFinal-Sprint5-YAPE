'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.screenn == 0){
    wrapper.append(Welcome(_=>{render(root)}));
  }else  if(state.screenn == 1){
    wrapper.append(Regiter(_=>{render(root)}));
  }else  if(state.screenn == 2){
    wrapper.append(RegisterCelular(state.user,_=>{render(root)}));
  }else  if(state.screenn == 3){
    wrapper.append(CreateUsuarioYape(_=>{render(root)}));
  }else  if(state.screenn == 4){
    root.removeClass('container');
    wrapper.append(FinRegistroYape(_=>{render(root)}));
    state.screenn = 5;
    setTimeout(_=>{
      render(root);
    },3000);
  }else  if(state.screenn == 5){
    wrapper.append(RegisterTarjeta(_=>{render(root)}));
  }else  if(state.screenn == 6){
    wrapper.append(ClaveTarjeta(_=>{render(root)}));
  }else  if(state.screenn == 7){
    root.removeClass('container');
    wrapper.append(FinRegistroTarjeta(_=>{render(root)}));
  }
  root.append(wrapper);
}
const state = {
  screenn: 7,
  validate: false,
  user: {},
  card: {}
};

$( _ => {
    const root = $("#root");
    render(root);
    $('.carousel').carousel({fullWidth: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
