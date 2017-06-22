'use strict';

const FinRegistroTarjeta = (update) => {
  const container = $('<div class="card-fin parallax-container row center purple-dark white-text"></div>');
  const header = $('<div class="section purple-light"></div>');
  const icon_top = $('<span class="col s12 right-align"><img src="img/icons/engine.png" alt="" class="img-responsive" width="25px"></span>');
  const img = $('<img src="img/icons/happy-face.png" alt="" class="img-responsive" width="100">');
  const h5 = $('<h5>Hola</h5>');
  const enlace = $('<p class="teal-text text-accent-4"><img src="img/icons/eye.png" class="center" alt="phone" width="5%">  Mostrar Saldo</p>');
  header.append(icon_top,img,h5,enlace);
  const div_movi = $('<p class="col s12 text-uppercase">últimos movimientos</h6><img src="img/icons/engine.png" alt="" class="img-responsive" width="25px"></p>');

  const icon = $('<img src="img/icons/check.png" class="center" alt="phone" width="0%">');
  const p = $('<h5 class="black-text text-darken-3"> ¡Bien! <br> Ahara puedes usar Yape </h5>');
  // div.append(icon,p);
  container.append(header,div_movi);
  return container

};
