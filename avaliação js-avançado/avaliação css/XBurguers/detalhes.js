const parametros = new URLSearchParams(window.location.search);
const idProduto = parametros.get("id");

const urlProdutos = "https://tech4produtos.fly.dev/produtos";

fetch(urlProdutos)
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        return resposta.json();
    })
    .then(produtos => {
        if (!idProduto) {
            console.log(
                "Abra os detalhes com um ID na URL, por exemplo: detalhes.html?id=1"
            );
            return;
        }

        const produto = produtos.find(item =>
            String(item.id) === String(idProduto)
        );

        if (!produto) {
            console.log("Produto não encontrado na API.");
            return;
        }

        document.getElementById("nome-produto").textContent = produto.nome;

        const card = document.getElementById("produto-xmonster");
        const imagem = card.querySelector("img");
        const descricao = card.querySelector("p");

        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        descricao.textContent = produto.descricao;
    })
    .catch(erro => {
        console.error("Erro ao buscar produto:", erro);
    });