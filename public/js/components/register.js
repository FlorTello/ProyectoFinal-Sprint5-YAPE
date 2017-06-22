
'use strict';
const Header = (container, src,title,text) =>{
  const img = $('<img src="'+src+'" alt="" class="img-responsive" width="100">');
  const h5 = $('<h5>'+title+'</h5>');
  const p = $('<p class="grey-text text-darken-2">'+text+'</p><br>');
  container.append(img,h5,p);

}
const Regiter = (update) =>{
  const container = $('<div class="center section row register"></div>');
  const header = Header(container,'img/icons/phone.png','Para comenzar validaremos tu número','Recibirás un SMS con un código de validación');
  const section = $('<div class="section"></div>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="number" class = "center validate" type="number" min="100000000" max="999999999" placeholder="Ingrese tu número de celular" required>');
  const label = $('<label class="label-icon" for="search"><img src="img/icons/phoneandnumber.png" alt="phone" width="60"></label>');
  const error = $('<div class = "red-text error">Celular Invalido</div>');
  const checkbox = $('<input type="checkbox" class="filled-in" id="filled-in-box" />');
  const label_c = $('<label for="filled-in-box">Acepto los <a href="">Términos y condiciones</a></label>');
  const btn_continuar = $('<button class="btn waves-effect amber accent-2 white-text btn-register margin-btn" disabled>Continuar</button>');
  error.hide();

  col.append(label,input,error);

  section.append(col);
  section.append(checkbox);
  section.append(label_c);

  container.append(header);
  container.append(section);
  container.append(btn_continuar);

  input.on('blur',(e) => {
    error.text('Celular Invalido');
    console.log(isNaN($(e.target).val().length));
    console.log($(e.target).val().length == 9);
      if($(e.target).val().length == 9){
        state.validate = true;
        error.hide();
      }
      else{
        state.validate = false;
        error.show();
      }
      console.log(state.validate);
  });
  checkbox.on('change',(e)=>{
    if($(e.target).is(':checked')) {
        btn_continuar.attr('disabled',false);
    }else{
      btn_continuar.attr('disabled',true);
    }
  });

  btn_continuar.on('click',_=>{

    if(state.validate == true){
      const newUser = {
        "phone": input.val(),
      	"terms": true
      }
      postPhone(newUser).then((response) => {
        if(response.data == null){
          error.text(response.message);
          error.show();
        }else {
          state.screenn = 2;
          state.user.phone = response.data.phone;
          state.user.code = response.data.code;
          update();
        }
      });
    }
  });
  return container;
};
