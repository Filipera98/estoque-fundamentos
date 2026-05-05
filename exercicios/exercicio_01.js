const prompt = require("prompt-sync")();

const estoque = [];

function buscarProduto(nome) {
  return estoque.find(p => p.nome === nome);
}

function adicionarProduto(nome, quantidade, preco) {
  if (quantidade <= 0 || preco <= 0) {
    console.log("Quantidade e preço devem ser maiores que zero");
    return;
  }

  const produtoExistente = buscarProduto(nome);

  if (produtoExistente) {
    console.log("Produto já existe");
    return;
  }

  estoque.push({
    nome: nome,
    quantidade: quantidade,
    preco: preco
  });
}

function listarProdutos() {
  console.log("Lista de produtos:");

  estoque.forEach(produto => {
    console.log(produto);
  });
}

function removerProduto(nome) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].nome === nome) {
      estoque.splice(i, 1);
      console.log("Produto removido:", nome);
      return;
    }
  }

  console.log("Produto não encontrado");
}

function atualizarProduto(nome, novaQuantidade, novoPreco) {
  if (novaQuantidade <= 0 || novoPreco <= 0) {
    console.log("Quantidade e preço devem ser maiores que zero");
    return;
  }

  const produto = buscarProduto(nome);

  if (!produto) {
    console.log("Produto não encontrado");
    return;
  }

  produto.quantidade = novaQuantidade;
  produto.preco = novoPreco;

  console.log("Produto atualizado:", nome);
}

function calcularTotal() {
  let total = 0;

  for (let i = 0; i < estoque.length; i++) {
    total += estoque[i].quantidade * estoque[i].preco;
  }

  return total;
}

function menu() {
  console.log("\n=== SISTEMA DE ESTOQUE ===");
  console.log("1 - Adicionar produto");
  console.log("2 - Listar produtos");
  console.log("3 - Remover produto");
  console.log("4 - Atualizar produto");
  console.log("5 - Ver total");
  console.log("0 - Sair");

  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      const nome = prompt("Nome: ");
      const quantidade = Number(prompt("Quantidade: "));
      const preco = Number(prompt("Preço: "));
      adicionarProduto(nome, quantidade, preco);
      break;

    case "2":
      listarProdutos();
      break;

    case "3":
      const nomeRemover = prompt("Nome do produto: ");
      removerProduto(nomeRemover);
      break;

    case "4":
      const nomeAtualizar = prompt("Nome: ");
      const novaQtd = Number(prompt("Nova quantidade: "));
      const novoPreco = Number(prompt("Novo preço: "));
      atualizarProduto(nomeAtualizar, novaQtd, novoPreco);
      break;

    case "5":
      console.log("Total:", calcularTotal());
      break;

    case "0":
      console.log("Saindo...");
      return;

    default:
      console.log("Opção inválida");
  }

  menu();
}

menu();