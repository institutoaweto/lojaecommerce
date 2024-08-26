// ATIVAÇÃO DA LUPA
const fundopesquisa = document.querySelector('.config-blocopesquisadesk');
const cliquepesquisa = document.querySelector('#deskinput-pesquisa');
const fecharpesquisa = document.querySelector('#icone-fecharpesquisadesk');

cliquepesquisa.addEventListener('input', function(){
    fundopesquisa.classList.add('ativarconfig-blocopesquisadesk');
    document.getElementById('icone-pesquisadesk').style.display = "none";
    document.getElementById('icone-fecharpesquisadesk').style.display = "flex";
})
 fecharpesquisa.addEventListener('click', function(){
    fundopesquisa.classList.remove('ativarconfig-blocopesquisadesk');
    document.getElementById('icone-pesquisadesk').style.display = "flex";
    document.getElementById('icone-fecharpesquisadesk').style.display = "none";
 })


// ATIVAÇÃO DA PESQUISA DA LUPA
 const pesquisainputmobum = document.getElementById('deskinput-pesquisa');//Barra de Pesquis
 const produtoinputmobum  = document.getElementById('listaseçao').getElementsByTagName('li'); //Lista + Dados


 pesquisainputmobum.addEventListener('input', function(){
 const pesquisaterminalmobum = pesquisainputmobum.value.toLowerCase();

 for (let i = 0; i < produtoinputmobum.length; i++){
 const produtonomemobum = produtoinputmobum[i].innerText.toLowerCase();

 if (produtonomemobum.includes(pesquisaterminalmobum)){
 produtoinputmobum[i].style.display = 'block'; 
 } 

 else{
 produtoinputmobum[i].style.display = 'none';
 }};

 })



