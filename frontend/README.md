# 📦 Recommendations List 

Uma aplicação frontend em **React** para recomendar produtos personalizados com base nas **preferências do usuário**, **funcionalidades desejadas** e **tipo de recomendação**.

---

## 🧩 Funcionalidades

- [x] Seleção de preferências via checkboxes
- [x] Escolha de funcionalidades do produto
- [x] Seleção do tipo de recomendação (única ou múltipla)
- [x] Reset automático do formulário após envio
- [x] Feedbacks visuais com Toastify
- [x] Aplicação responsiva para dispositivos desktop e mobile.

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Tailwind CSS](https://tailwindcss.com/) (opcional, para estilos utilitários)
- [Babel](https://babeljs.io/) — transpilador necessário para que o Jest compreenda JSX e funcionalidades do JavaScript

## 🏗️ Estrutura de pastas

```js
src/
│
├── components/
│   ├── Form/
│   │   ├── Form.js
│   │   ├── index.js
│   │   ├── Fields/
│   │   │   ├── Preferences.js
│   │   │   ├── Features.js
│   │   │   ├── RecommendationType.js
|   |   |   └── index.js
│   │   ├── SubmitButton.js
│   │   │   ├── index.js
|   |   |   └── SubmitButton.js
│   ├── RecommendationList/
|   |   └── checkbox.js
│   ├── shared/
|   |   └── checkbox.js
│   |
├── hooks/
│   ├── useForm.js
│   ├── useRecommendations.js
|   └── useProducts.js
│
├── mocks/
│   └── mockProducts.js
|
├── services/
|   ├── products.service.js
|   ├── products.service.test.js
|   ├── recommendation.service.js
│   └── recommendation.service.test.js
│
└── App.js
```

## 🧪 Testes

Para rodar os testes:

```
yarn test
```

## ▶️ Como executar localmente

1. Clonar o repositório
```js
git clone https://github.com/Biiars00/recommendations-list
cd <seu-diretorio>
```

2. Instalar dependências
> OBS: É necessário utilizar o comando abaixo no diretório backend, frontend e na raiz do projeto. 
```
yarn install
```

3. Rodar o projeto (frontend e backend)
```
yarn dev
```

- A aplicação estará disponível em: http://localhost:3000

🧑‍💻 Desenvolvido por: 

#### Beatriz Ribeiro

[LinkedIn](https://www.linkedin.com/in/beatriz-ribeiro-dev/) • [GitHub](https://github.com/Biiars00)