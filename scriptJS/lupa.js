let box = document.querySelector('.fundo');
let busca = document.querySelector('.lupa');


box.addEventListener('mouseover', ()=>{
box.classList.add('abrir');
});

box.addEventListener('mouseout', ()=>{
  box.classList.remove('abrir');
  });








//ATIVAÇÃO DA BARRA DE PESQUISA
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
    } 
    }

})













//ATIVAÇÃO DA BARRA DE PESQUISAMOB
const fundolupamob= document.querySelector('#listamob');
const lupacliquemob = document.querySelector('#input-lupa');
const menufecharmob = document.querySelector('#fechar-busca');

lupacliquemob.addEventListener('click', ()=>{
  fundolupamob.classList.add("ativo-listamob")
})

menufecharmob.addEventListener('click', ()=>{
  fundolupamob.classList.remove("ativo-listamob")
})


const pesquisainputmob = document.getElementById('input-lupa');//Barra de Pesquisa
const produtoinputmob  = document.getElementById('listamob').getElementsByTagName('li'); //Lista + Dados

pesquisainputmob.addEventListener('input',function(){
const pesquisaterminalmob = pesquisainputmob.value.toLowerCase();

for (let i = 0; i < produtoinputmob.length; i++){
    const produtonomemob = produtoinputmob[i].innerText.toLowerCase();

    if (produtonomemob.includes(pesquisaterminalmob)){
        produtoinputmob[i].style.display = 'block'; 
    } else{
        produtoinputmob[i].style.display = 'none';
    } 
    }

})