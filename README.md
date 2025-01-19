# 🎮 Geek Games - Loja Virtual de Jogos  

O **Geek Games** é uma loja virtual que permite gerenciar produtos do universo gamer de forma interativa e dinâmica. Com funcionalidades como busca, adição e exclusão de produtos, o projeto proporciona uma experiência moderna e fluida para os usuários.  

---

## 📋 Funcionalidades  

- **Busca de Produtos**:  
  Utilize a barra de pesquisa para localizar jogos específicos pelo nome.  
- **Gerenciamento de Produtos**:  
  - **Adicionar Produtos**: Insira nome, valor e URL da imagem para criar novos cards de produtos.  
  - **Excluir Produtos**: Remova facilmente um produto clicando no ícone de lixeira.  
- **Atualização Automática do Layout**:  
  - A interface ajusta bordas e sombras automaticamente com base nos produtos exibidos.  
- **Interface Interativa**:  
  - Feedback imediato para ações como adição, remoção e busca de produtos.  

---

## 🚀 Tecnologias Utilizadas  

- **HTML**: Estrutura da página.  
- **CSS**: Estilização do layout e responsividade.  
- **JavaScript**: Gerenciamento dinâmico dos elementos da página.  

---

## 📦 Como Usar  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/AndersonMaxX/geek-games.git
2.  Navegue até a pasta do projeto:
    
    ```bash
    
    CopiarEditar
    
    `cd geek-games` 
    
3.  Abra o arquivo `index.html` no navegador.
4.  Explore as funcionalidades disponíveis:
    -   **Adicionar Produtos**: Preencha os campos de nome, valor e URL da imagem e clique em "Guardar".
    -   **Pesquisar Produtos**: Digite o nome de um jogo na barra de pesquisa para filtrar os produtos exibidos.
    -   **Excluir Produtos**: Clique no ícone de lixeira no card do produto para removê-lo.

----------

## 🛠️ Estrutura do Código

### **Função filtrarProdutos()**

-   Filtra os produtos exibidos com base no texto digitado na barra de pesquisa.
-   Atualiza dinamicamente os estilos dos cards visíveis.

### **Função atualizarBorda()**

-   Ajusta bordas e sombras da seção principal com base na presença de produtos no grid.
-   Oculta ou exibe a área de rolagem (`scrollable`) conforme necessário.

### **Adição de Produtos**

-   Cria um novo card de produto com as informações fornecidas no formulário.
-   Verifica se todos os campos estão preenchidos antes de adicionar o produto.

### **Exclusão de Produtos**

-   Remove o card correspondente ao ícone de lixeira clicado.
-   Atualiza o layout da página após a exclusão.

### **Eventos do DOM**

-   **Carregamento Inicial**: Verifica e ajusta a borda da seção principal.
-   **Adição e Exclusão de Produtos**: Eventos para adicionar novos produtos e excluir os existentes.

----------

## 🔧 Requisitos

-   Navegador atualizado com suporte a ES6.
-   Ambiente local com os arquivos do projeto.

----------

## 🖼️ Exemplo de Uso

### **Adição de Produto**

1.  **Entrada**:
    -   Nome: _The Witcher 3_
    -   Valor: _R$ 150,00_
    -   URL da Imagem: _https://example.com/witcher3.jpg_
2.  **Resultado**:
    -   O produto será exibido como um novo card com o nome, valor e imagem fornecidos.

### **Busca de Produto**

1.  **Entrada**:
    -   Pesquisa: _witcher_
2.  **Resultado**:
    -   Apenas os produtos cujo nome contém "witcher" serão exibidos.

----------

## ⚠️ Observações

-   Certifique-se de preencher corretamente todos os campos do formulário antes de adicionar um produto.
-   A exclusão de produtos não possui confirmação; ao clicar no ícone de lixeira, o card será removido imediatamente.
-   O design e as funcionalidades são otimizados para uma experiência fluida em navegadores modernos.

----------

## 📝 Licença

Este projeto é distribuído sob a licença **MIT**. Fique à vontade para utilizá-lo, modificá-lo e compartilhá-lo!

----------

## 🖋️ Autor

Desenvolvido por **Anderson Max**, com foco na criação de interfaces dinâmicas e interativas para o universo gamer.

🌐 [Meu GitHub](https://github.com/AndersonMaxX)  
💼 [LinkedIn](https://www.linkedin.com/in/andersonmaxx)

