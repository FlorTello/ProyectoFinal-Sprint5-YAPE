'use strict';

const RegisterCodigo = (update) => {
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/message.png','Ahora ingresa tu código','Recibirás un SMS con un código de validación al numero <strong>'+"987654445"+'</<trong>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="search" class = "center" type="text" placeholder="_  _  _  _  _" required>');
  const label = $('<label class="label-icon" for="search"><img src="img/icons/lock.png" alt="phone" width="20"></label>');
  const p = $('<p class="grey-text text-darken-2">Reintentar en <img src="img/icons/clock.png" alt="phone" width="16"> </p>'+"21"+'');

  col.append(input,label,p);

  container.append(header);
  container.append(col);

  return container
}
