# Projeto de Testes com Cypress

Este projeto utiliza o **Cypress** para testes automatizados de uma aplicação web demo.

## Requisitos

- **Node.js**: v22.13.1
- **Cypress**: 14.0.1
- **Npm**: 11.1.0

### Dependências:

- **@faker-js/faker**: 9.4.0

## Instalação

1. Clone o repositório e navegue até o diretório do projeto.
2. Instale as dependências:

```bash
Copiar
npm install
Estrutura de Testes
Os testes estão organizados em arquivos dentro da pasta cypress/e2e/:

menu.cy.js: Testes para validação do menu de funcionalidades.
register.cy.js: Testes para o preenchimento do formulário de registro com cenários negativos.

Comandos Principais
Rodar os Testes no Modo Headless com o Chrome

```bash
Copiar
npm run cy:run:headless
Rodar testes específicos:

Testes de Menu:

```bash
Copiar
npm run cy:run:menu
Testes de Registro:

```bash
Copiar
npm run cy:run:register
