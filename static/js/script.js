const urlApi = "http://127.0.0.1:5001/produtos";
let produtos = [];

async function listarProdutos() {
  try {
    const response = await fetch(urlApi);
    produtos = await response.json();
    exibirProdutos(produtos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

function exibirProdutos(lista) {
  const tabela = document.getElementById("tabela-produtos");
  tabela.innerHTML = "";

  lista.forEach((produto) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${produto.nome}</td>
      <td>R$ ${produto.valor.toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
  });
}

document.getElementById("ordenar").addEventListener("change", function () {
  const criterio = this.value;

  if (criterio === "maior") {
    produtos.sort((a, b) => b.valor - a.valor);
  } else if (criterio === "menor") {
    produtos.sort((a, b) => a.valor - b.valor);
  }

  exibirProdutos(produtos);
});

listarProdutos();

async function cadastrarProduto() {
  const nome = document.getElementById("nome-produto").value;
  const descricao = document.getElementById("descricao-produto").value;
  const valor = parseFloat(document.getElementById("valor-produto").value);
  const disponivelVenda = document.querySelector(
    'input[name="disponibilidade-venda"]:checked'
  ).value;

  const produto = {
    nome: nome,
    valor: valor,
    descricao: descricao,
    disponibilidade: disponivelVenda === "true" ? true : false,
  };

  try {
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    if (response.ok) {
      alert("Produto cadastrado com sucesso!");
      window.location.href = "listagem.html";
    } else {
      alert("Erro ao cadastrar o produto.");
    }
  } catch (error) {
    console.error("Erro ao enviar o produto:", error);
    alert("Erro ao conectar com a API.");
  }
}
