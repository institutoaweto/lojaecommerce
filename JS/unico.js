function addproduto(nome, preco ,imagem, sinopse,pagina,imgum,imgdois,imgtres,imgquatro
,valorantigo,pagamento) {

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
    sessionStorage.setItem('produto_pagamento',pagamento);

  

    window.location.href = 'unico.html';

}

let nome = sessionStorage.getItem('produto_nome');
let preco = sessionStorage.getItem('produto_preco');
let imagem = sessionStorage.getItem('produto_imagem');
let sinopse = sessionStorage.getItem('produto_sinopse');
let pagina = sessionStorage.getItem('produto_pagina');
let imgum = sessionStorage.getItem('produto_imgum');
let imgdois = sessionStorage.getItem('produto_imgdois');
let imgtres = sessionStorage.getItem('produto_imgtres');
let imgquatro = sessionStorage.getItem('produto_imgquatro');
let valorantigo = sessionStorage.getItem('produto_valorantigo');
let pagamento = sessionStorage.getItem('produto_pagamento');




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
document.querySelector('.produto-detalhes .pagamento-final').href = pagamento;









