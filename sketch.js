document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    const logo = document.getElementById('logo-principal'); 
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    const inicioFundo = document.querySelector('.inicio-fundo'); 

    let tamanhoAtualFonte = 1;
    let contrasteAtivo = false; 

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;     document.documentElement.style.setProperty('--tamanhofontebase', `${tamanhoAtualFonte}rem`);

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.documentElement.style.setProperty('--tamanhofontebase', `${tamanhoAtualFonte}rem`);

    });

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste');
        contrasteAtivo = !contrasteAtivo;

        if (contrasteAtivo) {
            logo.src = '1.png';
            inicioFundo.style.backgroundImage = "url('img2.jpg')"; 
        } else {
            logo.src = '2.png';
            inicioFundo.style.backgroundImage = "url('img2.jpg')"; 
        }
    });
});
