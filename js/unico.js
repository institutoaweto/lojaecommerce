function addproduto(nome, preco ,imagem, sinopse,pagina,imgum,imgdois,imgtres,imgquatro
,valorantigo) {

    sessionStorage.setItem('produto_nome', nome);
    sessionStorage.setItem('produto_preco', preco);
    sessionStorage.setItem('produto_imagem', imagem);
    sessionStorage.setItem('produto_sinopse', sinopse);
    sessionStorage.setItem('produto_pagina', pagina);
    sessionStorage.setItem('produto_imgum', imgum);
    sessionStorage.setItem('produto_imgdois', imgdois);
    sessionStorage.setItem('produto_imgtres', imgtres);
    sessionStorage.setItem('produto_imgquatro', imgquatro);
    sessionStorage.setItem('produto_valorantigo', valorantigo);

    window.location.href = 'unico.html';

}

const nome = sessionStorage.getItem('produto_nome');
const preco = sessionStorage.getItem('produto_preco');
const imagem = sessionStorage.getItem('produto_imagem');
const sinopse = sessionStorage.getItem('produto_sinopse');
const pagina = sessionStorage.getItem('produto_pagina');
const imgum = sessionStorage.getItem('produto_imgum');
const imgdois = sessionStorage.getItem('produto_imgdois');
const imgtres = sessionStorage.getItem('produto_imgtres');
const imgquatro = sessionStorage.getItem('produto_imgquatro');
const valorantigo = sessionStorage.getItem('produto_valorantigo');


document.querySelector('.produto-detalhes .product-name').innerText = nome;
document.querySelector('.produto-detalhes .product-price').innerText = `R$${preco}`;
document.querySelector('.produto-detalhes .imagem-produto').src = imagem;
document.querySelector('.produto-detalhes .product-sinopse').innerText = sinopse;
document.querySelector('.produto-detalhes #produto-quantidade').innerText = pagina;
document.querySelector('.produto-detalhes .book-1').src = imgum;
document.querySelector('.produto-detalhes .book-2').src = imgdois;
document.querySelector('.produto-detalhes .book-3').src = imgtres;
document.querySelector('.produto-detalhes .book-4').src = imgquatro;
document.querySelector('.produto-detalhes .valor-antigo').innerHTML = valorantigo;




/*
function adicionarProduto(nome, preco ,imagem) {

    sessionStorage.setItem('produto_nome', nome);
    sessionStorage.setItem('produto_preco', preco);
    sessionStorage.setItem('produto_imagem', imagem);

    window.location.href = 'unico.html';
}


const nome = sessionStorage.getItem('produto_nome');
const preco = sessionStorage.getItem('produto_preco');
const imagem = sessionStorage.getItem('produto_imagem');

document.querySelector('.produto-detalhes .product-name').innerText = nome;
document.querySelector('.produto-detalhes .product-price').innerText = `R$${preco}`;
document.querySelector('.produto-detalhes .imagem-produto').src = imagem;
*/