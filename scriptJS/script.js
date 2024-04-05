//ATIVAÇÃO DA BARRA DE PESQUISA
let box = document.querySelector('.fundo');
let busca = document.querySelector('.lupa');

box.addEventListener('input', ()=>{
box.classList.add('abrir');
});

const pesquisainput = document.getElementById('input-pesquisa');//Barra de Pesquisa
const produtoinput  = document.getElementById('lista').getElementsByTagName('li'); //Lista + Dados

pesquisainput.addEventListener('input',function(){
const pesquisaterminal = pesquisainput.value.toLowerCase();

for (let i = 0; i < produtoinput.length; i++){
    const produtonome = produtoinput[i].innerText.toLowerCase();
    if (produtonome.includes(pesquisaterminal)){
        produtoinput[i].style.display = 'block'; 
    } else{
        produtoinput[i].style.display = 'none';
    }};
});



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
 

//ATIVAÇÃO DA BARRA DE PESQUISAMOB
const fundolupamob= document.querySelector('#listamob');
const lupacliquemob = document.querySelector('#input-lupa');
const menufecharmob = document.querySelector('#fechar-busca');

lupacliquemob.addEventListener('input', ()=>{
fundolupamob.classList.add("ativo-listamob")
})

menufecharmob.addEventListener('mouseout', ()=>{
fundolupamob.classList.remove("ativo-listamob")
})

const pesquisainputmob = document.getElementById('input-lupa');//Barra de Pesquisa
const produtoinputmob  = document.getElementById('listamob').getElementsByTagName('li'); //Lista + Dados
pesquisainputmob.addEventListener('input',function(){
const pesquisaterminalmob = pesquisainputmob.value.toLowerCase();
for (let i = 0; i < produtoinputmob.length; i++){
const produtonomemob = produtoinputmob[i].innerText.toLowerCase();

if (produtonomemob.includes(pesquisaterminalmob)){
produtoinputmob[i].style.display = 'block';} 
else{ produtoinputmob[i].style.display = 'none'; }
}
});





































