'use strict';

const CreateUsuarioYape = (update) => {
  console.log(state.user);
  const container = $('<div class="center section row register-codigo"></div>');
  const header = Header(container,'img/icons/lockone.png','Crea tu usuario Yape','Ingresa tu nombre, email y clave de usuario.');
  const form = $('<form class="col s12"></form>');
  const div = $('<div class="input-field center container"></div>');
  const input = $('<input id="search" class = "center" type="text" placeholder="Name" required>');
  const label = $('<label class="label-icon" for="search"><img src="img/icons/user.png" alt="phone" width="20"></label>');

  const div2 = $('<div class="input-field center container"></div>');
  const input2 = $('<input id="email" class = "center validate" type="email" placeholder="example@email.com" required>');
  const label2 = $('<label class="label-icon" data-error="email invalido" for="email"><img src="img/icons/message-gray.png" alt="phone" width="20"></label>');

  const div3 = $('<div class="input-field center container"></div>');
  const input3 = $('<input id="search" class = "center validate" type="text" placeholder="Name" required><span>Cuida esta clave como oro, es tu acceo a Yape</span>');
  const label3 = $('<label class="label-icon" for="search"><img src="img/icons/lock.png" alt="phone" width="20"></label>');
  const p = $('<span>Cuida esta clave como oro, es tu acceo a Yape</span>');

  const btn_crearcuenta = $('<button class="btn waves-effect amber accent-2 white-text btn-register" disabled>crear cuenta</button>');

  div.append(input,label,input2,label2,input3,label3);
  div2.append(input2,label2);
  div3.append(input3,label3);

  form.append(div,div2,div3,btn_crearcuenta);

  container.append(header);
  container.append(form);

  // ('load',(e)=>{
    // console.log(state.user.phone);
  //   setInterval(_=>{
  //       newCode({"phone":state.codigo})
  //   }, 5000);
  // // });


  return container
}
