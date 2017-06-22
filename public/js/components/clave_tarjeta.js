'use strict';

const ClaveTarjeta = (update) => {
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/bcp-logo.png','Ingresa la clave de tu tarjeta','Recibirás un SMS con un código de validación al numero <strong>****'+state.card.cardNumber.substring(12)+'</<trong>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="numero-tarjeta" class = "center" type="password" min="0000" max="9999" placeholder="" required>');
  const label = $('<label class="label-icon" for="numero-tarjeta"><img src="img/icons/lock.png" alt="phone" width="20"></label>');
  const btn_register = $('<button class="btn waves-effect amber accent-2 white-text btn-register margin-btn" disabled>regitrar</button>');

  col.append(input,label);
  container.append(header);
  container.append(col,btn_register);

  input.on('keyup',(e) => {
    if($(e.target).val() !== "") {
      btn_register.attr('disabled',false);
    }else{
      btn_register.attr('disabled',true);
    }
  });

  btn_register.on('click',(e) => {
    if(input.val().length == 4) {
      state.card.cardPassword = input.val();
      const newCard = {
        "phone": state.user.phone,
        "cardNumber": state.card.cardNumber,
        "cardMonth": state.card.cardMonth,
        "cardYear": state.card.cardYear,
        "cardPassword": state.card.cardPassword
      }
      createCard(newCard).then((response) => {
        if(response.data == null){
          console.log(response.message);
          // error.text(response.message);
          // error.show();
        }else {
          state.screenn = 7;
          console.log(response);
          setTimeout(_=>{
            update();
          },3000);
        }
      });
    }
  });


  return container;

};
