'use strict';
const FinRegistroYape = (update) => {
  const container = $('<div class="parallax-container screen-fin center amber accent-2"></div>');
  const div = $('<div class="flex"></div>');
  const icon = $('<img src="img/icons/check.png" class="center" alt="phone" width="30%">');
  const p = $('<h5 class="black-text text-darken-3"> ¡Bien! <br> Ahara puedes usar Yape </h5>');
  div.append(icon,p);
  container.append(div);
  return container
}
