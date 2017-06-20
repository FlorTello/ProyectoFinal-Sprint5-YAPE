'use strict';

const RegiterCodigo = (update) => {
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/message.png','Ahora ingresa tu código','Recibirás un SMS con un código de validación al numero <strong>'+"987654445"+'</<trong>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="search" class = "center" type="text" placeholder="_  _  _  _  _" required>');
  const label = $('<label class="label-icon" for="search"><img src="img/icons/lock.png" alt="phone" width="60"></label>');
  const p = $('<p>Reintentar en <img src="img/icons/clock.png" alt="phone" width="60"> </p>'+"21"+'');

}
