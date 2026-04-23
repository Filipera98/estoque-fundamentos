const estoque = [];

function adicionarProduto(nome, quantidade, preco) {
  estoque.push({
    nome: nome,
    quantidade: quantidade,
    preco: preco
  });
}

function listarProdutos() {
  console.log("Lista de produtos:");

  for (let i = 0; i < estoque.length; i++) {
    console.log(estoque[i]);
  }
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

function calcularTotal() {
  let total = 0;

  for (let i = 0; i < estoque.length; i++) {
    total += estoque[i].quantidade * estoque[i].preco;
  }

  return total;
}

adicionarProduto("Arroz", 10, 5);
adicionarProduto("Feijão", 5, 7);

listarProdutos();

console.log("Total:", calcularTotal());

removerProduto("Arroz");

listarProdutos();