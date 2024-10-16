function criaCartao(categoria,pergunta,resposerta){
   let container = document.getElementById('container');
   let cartao = document.createElement('article');
   cartao.className = 'café com leite';
   cartao.innerHTML =
   ` <div class="conteudo-cartao">
     <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
        </div>
</div>
     `
     container.appendChild(cartao);

}