const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return;
        }
        selecionarAba(aba)
        mostrarEsconderAba(aba)
    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    aba.classList.add("selecionado");
}

function mostrarEsconderAba(aba) {
    const informacaoSelecionado = document.querySelector(".informacao.selecionado ");
    informacaoSelecionado.classList.remove("selecionado");
    const idDoElementoDeInformacao = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacao)
    informacaoASerMostrada.classList.add("selecionado")
}