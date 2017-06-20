
'use strict';
const Header = (container, src,title,text) =>{
  const img = $('<img src="'+src+'" alt="" class="img-responsive" width="100">');
  const h5 = $('<h5>'+title+'</h5>');
  const p = $('<p class="grey-text text-darken-2">'+text+'</p><br>');
  container.append(img,h5,p);

}
const Regiter = () =>{
  const container = $('<div class="center section row register"></div>');
  const header = Header(container,'img/icons/phone.png','Para comenzar validaremos tu número','Recibirás un SMS con un código de validación');
  const section = $('<div class="section"></div>');
  const col = $('<div class="input-field center container"></div>');
  const input = $('<input id="search" class = "center" type="text" placeholder="Ingrese tu número de celular" required>');
  const label = $('<label class="label-icon" for="search"><img src="img/icons/phoneandnumber.png" alt="phone" width="60"></label>');
  const checkbox = $('<input type="checkbox" class="filled-in" id="filled-in-box" />');
  const label_c = $('<label for="filled-in-box grey-text text-darken-2">Acepto los <a href="">Términos y condiciones</a></label>');

  const btn_continuar = $('<button class="btn waves-effect amber accent-2 white-text btn-register" disabled>Continuar</button>');

  col.append(label,input);

  section.append(col);
  section.append(checkbox);
  section.append(label_c);

  container.append(header);
  container.append(section);
  container.append(btn_continuar);

  return container;
};
