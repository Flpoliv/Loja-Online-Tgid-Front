# 🛍️ Loja Online TGID

Uma aplicação de loja online desenvolvida com **React**, como parte de um teste técnico para a vaga de **Estagiário Front-End**. O projeto simula uma loja onde o usuário pode:

- Fazer login com nome de usuário
- Visualizar produtos disponíveis
- Comprar produtos com base no saldo
- Adicionar saldo à conta
- Gerenciar o carrinho
- Receber notificações (toast) para ações como compra, erro e logout

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

-   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **React Router DOM**: Para roteamento declarativo dentro da aplicação.
-   **React Context API**: Para gerenciamento de estado global.
-   **React Toastify**: Para exibir notificações (toasts) personalizadas.
-   **JavaScript (ES6+)**: Linguagem de programação base.
-   **CSS Modules / Responsividade**: Para estilização e design responsivo.

---

## 📦 Instalação e Uso

Para configurar e rodar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/loja-online-tgid.git](https://github.com/seu-usuario/loja-online-tgid.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd loja-online-tgid/loja-app
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rode o projeto:**
    ```bash
    npm run dev
    ```

    A aplicação estará disponível em `http://localhost:5173`.

---

## 👤 Funcionalidades

A Loja Online TGID oferece as seguintes funcionalidades:

-   ✅ **Login simples com nome**: Permite que o usuário faça login apenas com um nome.
-   ✅ **Visualização de produtos**: Exibe produtos com nome, descrição, imagem e preço.
-   ✅ **Compra com validação de saldo**: Permite a compra de produtos apenas se o usuário tiver saldo suficiente.
-   ✅ **Saldo atual e saldo restante visível**: O usuário pode visualizar seu saldo atual e o saldo restante após as compras.
-   ✅ **Carrinho de compras completo**: Inclui o total da compra e botões para remover itens ou esvaziar o carrinho.
-   ✅ **Toasts de sucesso, erro e informação**: Notificações visuais para feedback ao usuário.
-   ✅ **Logout com redirecionamento automático**: Desconecta o usuário e o redireciona para a página de login.
-   ✅ **Layout leve, limpo e responsivo**: Design otimizado para diferentes tamanhos de tela.

---

## 📁 Estrutura de Pastas (Resumo)

A estrutura principal do projeto está organizada da seguinte forma:
loja-app/
├── src/
│   ├── components/
│   │   ├── CardProduto.jsx
│   │   ├── Carrinho.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   └── Produtos.jsx
│   ├── context/
│   │   ├── LojaContext.jsx
│   │   └── LojaProvider.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
└── README.md

---

## 💡 Melhorias Futuras

Algumas melhorias planejadas para o futuro incluem:

-   **Integração com back-end**: Para autenticação de usuários e persistência de dados real.
-   **Persistência de dados**: Via `localStorage` ou integração com um banco de dados.
-   **Paginação e filtros de produtos**: Para melhorar a navegabilidade em um catálogo maior.
-   **Responsividade aprimorada**: Com a utilização de frameworks como Tailwind CSS ou Material UI.

---

## 📷 Preview

---

## 🧑‍💻 Autor

**Felipe de Oliveira**

Este projeto foi desenvolvido como parte do teste técnico para a vaga de Estagiário Front-End na TGID.