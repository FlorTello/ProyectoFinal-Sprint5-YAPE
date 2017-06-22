'use strict';

const ClaveTarjeta = (update) => {
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/bcp-logo.png','Ingresa la clave de tu tarjeta','Recibirás un SMS con un código de validación al numero <strong>state.card.cardNumber</<trong>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="numero-tarjeta" class = "center" type="text" placeholder="" required>');
  const label = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/lock.png" alt="phone" width="20"></label>');
  const btn_register = $('<button class="btn waves-effect amber accent-2 white-text btn-register" disabled>regitrar</button>');

  col.append(input,label);
  container.append(header);
  container.append(col,btn_register);

  return container;

};
