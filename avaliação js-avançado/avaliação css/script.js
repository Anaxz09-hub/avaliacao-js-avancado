const nomeRestaurante  = "XBurgers";

fetch(` https://tech4produtos.fly.dev/produtos/restaurantes=${nomeRestaurante}`)
.then(resposta => resposta.json())
.then(produtos => {
    console.log(produtos);
})
.catch(erro => {
    console.log("Erro ao consultar a API:", erro);
});