const fundotestpesquisa = document.querySelector('.desk-pesquisa');
const cliquetestpesquisa = document.querySelector('#deskinput-pesquisa');
const fecharbarrapesquisa = document.querySelector('#icone-fecharpesquisadesk');


cliquetestpesquisa.addEventListener('click', function(){
    fundotestpesquisa.classList.add('desk-pesquisaativar')
    document.getElementById('icone-pesquisadesk').style.display = "none";
    document.getElementById('icone-fecharpesquisadesk').style.display = "flex";
    document.querySelector('.config-blocopesquisadesk').style.display = "flex";
});

fecharbarrapesquisa.addEventListener('click', function(){
    fundotestpesquisa.classList.remove('desk-pesquisaativar');
    document.getElementById('icone-pesquisadesk').style.display = "flex";
    document.getElementById('icone-fecharpesquisadesk').style.display = "none";
    document.querySelector('.config-blocopesquisadesk').style.display = "none";
})





// ATIVAÇÃO DA LUPA


/*
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
*/

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



