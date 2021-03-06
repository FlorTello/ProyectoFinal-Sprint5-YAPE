'use strict';

const FinRegistroTarjeta = (update) => {
  const container = $('<div class="card-fin parallax-container row center purple-dark white-text"></div>');
  const header = $('<div class="section purple-light"></div>');
  const icon_top = $('<span class="col s12 right-align"><img src="img/icons/engine.png" alt="" class="img-responsive" width="25px"></span>');
  const img = $('<img src="img/icons/happy-face.png" alt="" class="img-responsive" width="100">');
  const h5 = $('<h5>Hola</h5>');
  const enlace = $('<p class="teal-text text-accent-4"><img src="img/icons/eye.png" class="center" alt="phone" width="5%">  Mostrar Saldo</p>');
  header.append(icon_top,img,h5,enlace);
  const div_movi = $('<p class="col s12 text-uppercase left-align">últimos movimientos</h6><img class="right" src="img/icons/right-arrow-circular-button.png" alt="" class="img-responsive" width="25px"></p><hr>');
  const icon = $('<img src="img/icons/check.png" class="center" alt="phone" width="0%">');
  const p = $('<h5 class="black-text text-darken-3"> ¡Bien! <br> Ahara puedes usar Yape </h5>');
  const info = $(`<div class="container section">
                    <div class="row">
                      <img src="img/icons/icon.png" class="img-responsive col s5" alt="yape" width="40%">
                      <p class="col s7 right-align text-bold"><br><h6>¿Aún no realizas tu primer pago?</h6> es rápido y secillo</p>
                    </div>
                  </div><br>`);
  const footer = $(`<div class="flex-footer purple-dark center section">
                    <div class="container">
                      <img src="img/icons/send.png" class="img-responsive" alt="yape">
                      <p class="text-uppercase">Enviar Pago</p>
                    </div>
                    <div class="container">
                      <img src="img/icons/code-qr.png" class="img-responsive" alt="yape">
                      <p class="text-uppercase">Recibir pago</p>
                    </div>
                  </div>`);
  container.append(header,div_movi,info,footer);
  return container

};
