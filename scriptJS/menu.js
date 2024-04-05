// ATIVAÇÃO DO MENU MOBILE

const fundomenu = document.querySelector('.fundo-menu');
const menuclique = document.querySelector('.bi-list');
const menufechar = document.querySelector('.fechar-menu')

menuclique.addEventListener('click', function(){
  fundomenu.classList.add("menu-ativar");
});

menufechar.addEventListener('click', function(){
  fundomenu.classList.remove("menu-ativar");
});