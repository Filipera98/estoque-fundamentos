const estoque = [];

function adicionarProduto(nome, quantidade, preco) {
 
  if (quantidade <= 0 || preco <= 0) {
    console.log("Quantidade e preço devem ser maiores que zero");
    return;
  }

 
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].nome === nome) {
      console.log("Produto já existe");
      return;
    }
  }

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

function atualizarProduto(nome, novaQuantidade, novoPreco) {
 
  if (novaQuantidade <= 0 || novoPreco <= 0) {
    console.log("Quantidade e preço devem ser maiores que zero");
    return;
  }

  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].nome === nome) {
      estoque[i].quantidade = novaQuantidade;
      estoque[i].preco = novoPreco;

      console.log("Produto atualizado:", nome);
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