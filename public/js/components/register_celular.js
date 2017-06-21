'use strict';

const RegisterCelular = (user,update) => {
  state.validate = false;
  console.log(state.user);
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/message.png','Ahora ingresa tu código','Recibirás un SMS con un código de validación al numero <strong>'+state.user.phone+'</<trong>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="search" class = "center" type="text" placeholder="_  _  _  _  _" required>');
  const label = $('<label class="label-icon" for="search"><img src="img/icons/lock.png" alt="phone" width="20"></label>');
  const p = $('<p class="grey-text text-darken-2">Reintentar en <img src="img/icons/clock.png" alt="phone" width="16"> </p>'+"21"+'');
  const time = $('<span></span>');
  p.append(time);
  const confTimer = { countdown: true,
                      duration: '15s',
                      callback: function() {
                        newCode({"phone":state.user.phone});
                        p.timer('remove');
                        p.timer(confTimer);
                       },
                      format: '%s S'};
  time.timer({
    countdown: true,
    duration: '15s',
    callback: function() {
      newCode({"phone":state.user.phone});
      time.timer('remove');
      time.timer(confTimer);
     },
     format: '%s S'
  });

  col.append(input,label,p);

  container.append(header);
  container.append(col);

  input.on('keyup',(e) => {
    console.log($(e.target).val());
    console.log(state.user.code);
    if($(e.target).val() === state.user.code.toString()){
      state.validate = true;
      state.screenn = 3;
      update();
    }
  });

  return container
}
