
# 🚀 webdojo - Testes Automatizados com Cypress

![Node.js](https://img.shields.io/badge/node-%3E%3D14.x-brightgreen)  
![Cypress](https://img.shields.io/badge/cypress-%5E12.x-blue)  
![License](https://img.shields.io/badge/license-MIT-green)  
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## 📖 Descrição

Este projeto contém os testes automatizados da aplicação **webdojo**, utilizando o framework **Cypress**.  
A aplicação e os testes estão localizados no mesmo repositório, proporcionando agilidade no desenvolvimento e validação de funcionalidades.

---

## 📦 Tecnologias Utilizadas

- **Cypress** → Testes E2E.
- **Node.js** → Ambiente de execução.
- **Serve** → Para servir a aplicação em ambiente local.

---

## 🗂️ Estrutura do Projeto

```
cypress
├── e2e                  # Testes End-to-End
├── fixtures            # Dados de teste e arquivos de apoio
│   ├── cep.json
│   ├── consultancyData.json
│   └── docteste.pdf
├── support             # Suporte aos testes
│   ├── actions
│   │   └── consultancy.actions.js
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js
```

---

## 🛠️ Instalação

### Pré-requisitos

- Node.js >= 14.x
- npm >= 6.x

### Passos

1. Clone o repositório:

   ```bash
   git clone <url-do-repositório>
   cd <nome-do-repositório>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

---

## ▶️ Executando a Aplicação

Para iniciar a aplicação **webdojo** localmente:

```bash
npm run dev
```

A aplicação será servida normalmente na porta `3000`.  

**Obs.:** A aplicação precisa estar rodando para que os testes sejam executados corretamente.

---

## 🧪 Executando os Testes

### Scripts disponíveis:

| Script | Descrição |
| ------- | -------- |
| `npm run dev` | Inicia a aplicação webdojo. |
| `npm test` | Executa todos os testes Cypress em modo headless (`1440x900`). |
| `npm run cypress:open` | Abre o Cypress em modo interativo. |
| `npm run test:login` | Executa apenas os testes de login em `1440x900`. |
| `npm run test:login:mobile` | Executa testes de login simulando mobile (`414x896`). |

---

### Exemplos:

Rodar todos os testes:

```bash
npm test
```

Abrir o painel do Cypress:

```bash
npm run cypress:open
```

Testar login na versão mobile:

```bash
npm run test:login:mobile
```

---

## ✅ Boas Práticas

- Sempre inicie a aplicação antes de rodar os testes.
- Utilize fixtures para manter dados de testes organizados.
- Modularize ações no diretório `support/actions` para promover reuso e manutenção facilitada.

---

## 🧭 Metáfora para Entendimento

> Pense no Cypress como um **piloto automático** que navega pela aplicação webdojo, realizando tarefas de forma precisa e repetível, garantindo que tudo funcione conforme o esperado.

---

## 📚 Referências

- [Cypress - Documentação Oficial](https://docs.cypress.io/)
- [Node.js](https://nodejs.org/)
- [Serve - Static Server](https://www.npmjs.com/package/serve)

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.
