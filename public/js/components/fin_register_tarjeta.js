'use strict';

const FinRegistroTarjeta = (update) => {
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/bcp-logo.png','Registra tu tarjeta débito BCP','Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="numero-tarjeta" class = "center" type="text" placeholder="" required>');
  const label = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/card.png" alt="phone" width="20"></label>');

  col.append(input,label);
  container.append(header);
  container.append(col);

  return container;

};
