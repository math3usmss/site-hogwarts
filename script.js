let grifinoria = document.querySelector(".casas-grifinoria");
let sonserina = document.querySelector(".casas-sonserina");
let lufa = document.querySelector(".casas-lufa");
let corvinal = document.querySelector(".casas-corvinal");

let body = document.querySelector("body");


function ampliarGrifinoria(){
  sonserina.classList.remove('ampliar');
  lufa.classList.remove('ampliar');
  corvinal.classList.remove('ampliar');
  grifinoria.classList.toggle('ampliar');
}
function ampliarSonserina(){
  sonserina.classList.toggle('ampliar');
  lufa.classList.remove('ampliar');
  corvinal.classList.remove('ampliar');
  grifinoria.classList.remove('ampliar');
}
function ampliarLufa(){
  lufa.classList.toggle('ampliar');
  sonserina.classList.remove('ampliar');
  corvinal.classList.remove('ampliar');
  grifinoria.classList.remove('ampliar');
}
function ampliarCorvinal(){
  corvinal.classList.toggle('ampliar');
  lufa.classList.remove('ampliar');
  sonserina.classList.remove('ampliar');
  grifinoria.classList.remove('ampliar');
}

grifinoria.addEventListener("click", ampliarGrifinoria);
sonserina.addEventListener("click", ampliarSonserina);
lufa.addEventListener("click", ampliarLufa);
corvinal.addEventListener("click", ampliarCorvinal);
