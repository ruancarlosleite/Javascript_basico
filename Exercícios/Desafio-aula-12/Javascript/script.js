let botao = document.getElementById("cadastrar");
let total = 0;

botao.addEventListener("click", cadastrarFilme);

function cadastrarFilme() {

    let nome = document.getElementById("nome").value;
    let genero = document.getElementById("genero").value;
    let ano = document.getElementById("ano").value;

    if (nome === "" || genero === "" || ano === "") {
        alert("Preencha todos os campos");
        return;
    }

    let card = document.createElement("div");

    card.innerHTML = `
        <h3>Filme: ${nome}</h3>
        <p>Gênero: ${genero}</p>
        <p>Ano: ${ano}</p>
    `;

    card.classList.add("filme");

    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";

    btnExcluir.addEventListener("click", function () {
        card.remove();
        total--;
        document.getElementById("contador").textContent =
            `Filmes Cadastrados: ${total}`;
    });

    card.appendChild(btnExcluir);

    let lista = document.getElementById("listaFilmes");
    lista.appendChild(card);

    document.getElementById("nome").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";

    total++;
    document.getElementById("contador").textContent =
        `Filmes Cadastrados: ${total}`;
}