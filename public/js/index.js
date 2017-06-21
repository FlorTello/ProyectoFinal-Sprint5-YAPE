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
  }
  root.append(wrapper);
}
const state = {
  screenn: 4,
  validate: false,
  user: {},
};

$( _ => {
    const root = $("#root");
    render(root);
    $('.carousel').carousel({fullWidth: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
