//SISTEMA MENU
const fundomenumob = document.querySelector('.config-menumob');
const cliquemenumob = document.querySelector('#icone-menu');
const fecharmenumob = document.querySelector('#closemenu');

cliquemenumob.addEventListener('click', function(){
    fundomenumob.classList.add('ativarconfig-menumob')
})

fecharmenumob.addEventListener('click', function(){
    fundomenumob.classList.remove('ativarconfig-menumob')
})



//SISTEMA LUPA DOIS
const mobfundolupa = document.querySelector('.config-blocopesquisamob');
const digitarlupa = document.querySelector('#mobinput-pesquisa');

digitarlupa.addEventListener('input', function(){
    mobfundolupa.classList.add('ativar')
    document.getElementById('icone-fazerpesquisamob').style.display = "flex"
    document.getElementById('icone-fecharpesquisamob').style.display = "none"
})

fecharlupamob.addEventListener('click',function(){
    mobfundolupa.classList.remove('ativar')
    document.getElementById('icone-fazerpesquisamob').style.display = "none"
    document.getElementById('icone-fecharpesquisamob').style.display = "flex"
});






const pesquisainput = document.getElementById('mobinput-pesquisa');//Barra de Pesquisa
const produtoinput  = document.getElementById('listaseçaomob').getElementsByTagName('li'); //Lista + Dados

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


