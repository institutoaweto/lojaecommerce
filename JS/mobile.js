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



//SISTEMA LUPA UM
const fundolupamob = document.querySelector('.config-pesquisamob');
const cliqueluapamob = document.querySelector('#icone-pesquisamob');
const fecharlupamob = document.querySelector('#icone-fecharpesquisaamob');

cliqueluapamob.addEventListener('click', function(){
    fundolupamob.classList.add('ativar-pesquisamob')
});

fecharlupamob.addEventListener('click',function(){
    fundolupamob.classList.remove('ativar-pesquisamob')
});


//SISTEMA LUPA DOIS
const mobfundolupa = document.querySelector('.config-blocopesquisamob');
const digitarlupa = document.querySelector('#mobinput-pesquisa');

digitarlupa.addEventListener('input', function(){
    mobfundolupa.classList.add('ativar')
})

fecharlupamob.addEventListener('click',function(){
    mobfundolupa.classList.remove('ativar')
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


