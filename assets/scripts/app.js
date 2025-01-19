// Função que filtra os produtos com base no texto da barra de pesquisa
function filtrarProdutos() {
    // Pega o valor do input de pesquisa e converte para letras minúsculas
    const pesquisa = document.getElementById('pesquisaInput').value.toLowerCase();

    // Seleciona todos os cards de produtos na página
    const produtos = document.querySelectorAll('.product-card');

    // Itera sobre os cards de produtos e aplica o filtro de exibição
    produtos.forEach((produto) => {
        // Obtém o nome do produto e converte para letras minúsculas
        const nomeProduto = produto.querySelector('h2').textContent.toLowerCase();

        // Verifica se o nome do produto contém o texto digitado na pesquisa
        if (nomeProduto.includes(pesquisa)) {
            produto.style.display = 'flex'; // Exibe o produto como um item flexível
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });

    // Atualiza a estilização dos cards visíveis após o filtro
    atualizarEstilosDosCards();
}

// Função para atualizar os estilos dos cards visíveis
const atualizarEstilosDosCards = () => {
    const productCards = document.querySelectorAll('.product-card');

    // Itera sobre os cards para garantir que os visíveis estejam com estilo correto
    productCards.forEach(card => {
        if (card.style.display !== 'none') {
            // Se o card estiver visível, adiciona a classe de estilo
            card.classList.add('card-style');
        }
    });
};

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do formulário e da página
    const form = document.getElementById('product-form');
    const productGrid = document.getElementById('product-grid');
    const nomeInput = document.getElementById('nome');
    const valorInput = document.getElementById('valor');
    const imagemInput = document.getElementById('imagem');
    const guardarBtn = document.getElementById('guardar');
    const limparBtn = document.getElementById('limpar');

    // Função para verificar e atualizar o estilo do grid e da seção principal
    const atualizarBorda = () => {
        const scrollable = document.querySelector('.scrollable'); // Seleciona a div scrollable
        const productGrid = document.getElementById('product-grid'); // Seleciona o grid de produtos
        const principalSection = document.querySelector('.principal'); // Seleciona a seção principal

        // Verifica se o grid está vazio
        if (productGrid.children.length === 0) {
            scrollable.style.display = 'none'; // Oculta a div scrollable
            principalSection.style.border = 'none'; // Remove a borda da seção principal
            principalSection.style.boxShadow = 'none'; // Remove o box-shadow da seção principal
        } else {
            scrollable.style.display = 'flex'; // Exibe a div scrollable
            principalSection.style.border = '1px solid #ccc'; // Adiciona uma borda à seção principal
            principalSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Adiciona box-shadow à seção principal
        }
    };

    // Adiciona evento para adicionar um novo card
    guardarBtn.addEventListener('click', () => {
        const nome = nomeInput.value.trim(); // Obtém e remove espaços extras no nome
        const valor = valorInput.value.trim(); // Obtém e remove espaços extras no valor
        const imagem = imagemInput.value.trim(); // Obtém e remove espaços extras na URL da imagem

        // Verifica se todos os campos estão preenchidos
        if (!nome || !valor || !imagem) {
            alert('Preencha todos os campos antes de adicionar o produto!'); // Exibe alerta
            return;
        }

        // Cria um novo card de produto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${imagem}" alt="${nome}">
            <h2>${nome}</h2>
            <p class="produto__preco">$ ${valor}</p>
            <img class="delete-icon" src="assets/imagens/cabecalho/lixeira.png" alt="Deletar">
        `;

        // Adiciona evento de deletar ao ícone de exclusão
        productCard.querySelector('.delete-icon').addEventListener('click', () => {
            productCard.remove(); // Remove o card
            atualizarBorda(); // Atualiza a borda após remover o card
        });

        productGrid.appendChild(productCard); // Adiciona o novo card ao grid

        atualizarBorda(); // Atualiza a borda após adicionar o card

        form.reset(); // Limpa os campos do formulário
    });

    // Adiciona evento para limpar o formulário
    limparBtn.addEventListener('click', () => {
        form.reset(); // Limpa os campos do formulário
    });

    // Função para deletar um card existente
    const deletar = (event) => {
        const productCard = event.target.closest('.product-card'); // Encontra o card mais próximo
        if (productCard) {
            productCard.remove(); // Remove o card
            atualizarBorda(); // Atualiza a borda após remover o card
        }
    };

    // Adiciona evento de deletar para os cards existentes
    document.querySelectorAll('.delete-icon').forEach((icon) => {
        icon.addEventListener('click', deletar);
    });

    // Verifica a borda no carregamento inicial
    atualizarBorda();
});
