'use strict';

const RegisterTarjeta = (update) => {

  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/bcp-logo.png','Registra tu tarjeta débito BCP','Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="numero-tarjeta" class = "center" type="text" placeholder="" required>');
  const label = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/card.png" alt="phone" width="20"></label>');
  const p = $('<p class="teal-text text-accent-4" ><img src="img/icons/scan.png" alt="phone" width="20">  Escanear tarjeta</p>');
  const div = $('<div class="left-align container section div-right"></div>');
  const div_date =$('<div class = "right"></div>');
  const label_fecha = $('<span class="grey-text text-darken-2" for="fecha">Fecha de vencimiento</span>');
  const month = $('<input id="month" class = "center input-date month" type="text" placeholder="Mes"  required><i>|</i>');
  const year = $('<input id="year" class = "center input-date" type="text" placeholder="Año"  required>');
  const btn_container =$('<div class="center"></div>');
  const btn_continuar = $('<button class="btn waves-effect amber accent-2 white-text btn-continuar" disabled>Continuar</button>');
  btn_container.append(btn_continuar);
  div_date.append(month,year);
  div.append(label_fecha,div_date);

  col.append(input,label);
  container.append(header);
  container.append(col,p,div);
  container.append(btn_container);

  return container;

};
