
const nomeRestaurante = "XBurguers";

const urlProdutos =
     "https://tech4produtos.fly.dev/produtos";

fetch(urlProdutos)
    .then(resposta => {
        if (!resposta.ok) {
            throw new Error("Não foi possível consultar a API.");
        }

        return resposta.json();
    })
    .then(produtos => {
        console.log("Produtos recebidos da API:", produtos);
        console.log("Primeiro produto da API:", produtos[0]);

        console.log(
    "Restaurantes cadastrados:",
    [...new Set(produtos.map(produto => produto.restaurante))]
    );

        if (!Array.isArray(produtos) || produtos.length === 0) {
            console.log("Nenhum produto encontrado. Mantendo os cartões atuais.");
            return;
        }

        const produtosXBurgers = produtos.filter(produto =>
            produto.restaurante?.trim().toLowerCase() ===
            nomeRestaurante.toLowerCase()
        );

        if (produtosXBurgers.length === 0) {
            console.log("Nenhum produto do XBurgers encontrado.");
            return;
        }

        const areaCardapio = document.getElementById("produtos-api");

        if (!areaCardapio) {
            console.error("A área produtos-api não foi encontrada.");
            return;
        }

        produtosXBurgers.forEach(produto => {
            const cartao = document.createElement("div");
            cartao.className = "hamburgueres";

            const imagem = document.createElement("img");
            imagem.src = produto.imagem;
            imagem.alt = produto.nome;
            imagem.width = 250;

            const nome = document.createElement("h2");
            nome.textContent = produto.nome;

            const descricao = document.createElement("p");
            descricao.textContent = produto.descricao;

            const link = document.createElement("a");
            link.href = `detalhes.html?id=${encodeURIComponent(produto.id)}`;
            link.textContent = "Ver detalhes";

            cartao.append(imagem, nome, descricao, link);
            areaCardapio.appendChild(cartao);
        });

        document.querySelectorAll(".lancamento, .hamburgueres")
            .forEach(cartao => {
                if (!areaCardapio.contains(cartao)) {
                    cartao.hidden = true;
                }
            });

        console.log("Produtos carregados pela API.");
    })
    .catch(erro => {
        console.error("Erro ao consultar a API:", erro);
    });
