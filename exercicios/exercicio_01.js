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