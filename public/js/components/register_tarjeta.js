'use strict';

const RegisterTarjeta = (update) => {
  state.validate = false;
  const container = $('<div class="center row register-codigo"></div>');
  const header = Header(container,'img/icons/bcp-logo.png','Registra tu tarjeta débito BCP','Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="numero-tarjeta" class = "center" type="text" maxlength="16 minlength="16" placeholder="" required>');
  const label = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/card.png" alt="phone" width="20"></label>');
  const p = $('<p class="teal-text text-accent-4" ><img src="img/icons/scan.png" alt="phone" width="20">  Escanear tarjeta</p>');
  const div = $('<div class="left-align container section div-right"></div>');
  const div_date =$('<div class = "right"></div>');
  const label_fecha = $('<span class="grey-text text-darken-2" for="fecha">Fecha de vencimiento</span>');
  const month = $('<input id="month" class = "center input-date month" type="number" min="1" max="12" placeholder="Mes"  required><i>|</i>');
  const year = $('<input id="year" class = "center input-date" type="number" placeholder="Año" min="17" max="24" required>');
  const btn_container =$('<div class="center"></div>');
  const btn_continuar = $('<button class="btn waves-effect amber accent-2 white-text btn-continuar margin-btn" disabled>Continuar</button>');
  btn_container.append(btn_continuar);
  div_date.append(month,year);
  div.append(label_fecha,div_date);

  col.append(input,label);
  container.append(header);
  container.append(col,p,div);
  container.append(btn_container);

  input.on('keyup',(e) => {
    state.validate = false;
    if($(e.target).val().length == 16){
      state.validate = true;
    }
  });
  month.on('keyup',(e) => {
    state.validate = false;
    if($(e.target).val() >= 1 && month.val() <= 12){
      console.log('mes');
      state.validate = true;
    }
  });
  year.on('keyup',(e) => {
    state.validate = false;
    if($(e.target).val() >= 17 && $(e.target).val() <= 24){
      btn_continuar.attr('disabled',false);
      state.validate = true;
    }
  });

  btn_continuar.on('click',(e) => {
    if(state.validate == true){
      state.screenn = 6;
      state.card.userId = state.user.phone;
      state.card.cardNumber = input.val();
      state.card.cardMonth = month.val();
      state.card.cardYear = year.val();
      update();
    }
  });

  return container;

};
