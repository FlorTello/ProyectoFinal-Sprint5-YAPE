'use strict';

const RegisterTarjeta = (update) => {

  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/bcp-logo.png','Registra tu tarjeta débito BCP','Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="numero-tarjeta" class = "center" type="text" placeholder="" required>');
  const label = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/card.png" alt="phone" width="20"></label>');
  const span = $('<span><img src="img/icons/scan.png" alt="phone" width="20">Escanear tarjeta</span>');
  const label_fecha = $('<label class="" for="fecha">Fecha de vencimiento</label>');
  const const month = $('<input id="month" class = "center" type="text" placeholder="" required>');
  const const year = $('<input id="year" class = "center" type="text" placeholder="" required>');
  col.append(input,label);
  container.append(header);
  container.append(col,span);

  return container;

};
