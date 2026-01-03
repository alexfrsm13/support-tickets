<p align="center">
  <img alt="Formação Node.js" src="https://storage.googleapis.com/star-lab/novo-site/formacoes/nodejs/node-icon.svg" width="100px" />
</p>

# 🎫 Support Tickets API (Pure Node.js)

> API RESTful desenvolvida inteiramente com **Node.js puro** (sem frameworks) para o gerenciamento de chamados de suporte técnico (Help Desk).

## 💻 Sobre o Projeto

Este projeto consolida os conhecimentos fundamentais do ecossistema Node.js. A aplicação permite o ciclo completo de gerenciamento de tickets: abertura, listagem com filtros, atualização de detalhes e encerramento de chamados.

Tudo foi construído manualmente para entender como as ferramentas funcionam "por baixo dos panos":
- **Sem Express/Nest:** O servidor HTTP foi criado usando apenas o módulo nativo `http`.
- **Roteamento Artesanal:** Interpretação de URLs e parâmetros (`:id`) via Regex.
- **Banco de Dados Local:** Persistência de dados em arquivo JSON (`db.json`).

## 🛠 Tecnologias Utilizadas

- **Node.js** (Runtime)
- **JavaScript** (ESModules)
- **Módulos Nativos:**
  - `node:http`: Servidor web.
  - `node:fs`: Sistema de arquivos.
  - `node:crypto`: Geração de UUIDs.

## ⚙️ Arquitetura

O projeto segue uma organização limpa, separando responsabilidades por funcionalidade:

| Diretório/Arquivo | Responsabilidade |
|---|---|
| `server.js` | Inicialização do servidor e composição dos middlewares. |
| `routes/` | Definição dos endpoints e vinculação com os controllers. |
| `controllers/` | Regras de negócio (Criação, Atualização, Fechamento de tickets). |
| `database.js` | Camada de persistência (CRUD no arquivo `db.json`). |
| `middlewares/` | Interceptadores para parsing de JSON (`jsonHandler`) e roteamento (`routeHandler`). |
| `utils/` | Utilitários para Regex de rotas e extração de Query Params. |

## 🔌 Rotas da API

### Tickets (`/tickets`)

| Método | Rota | Descrição |
|---|---|---|
| **POST** | `/tickets` | Abre um novo ticket de suporte. |
| **GET** | `/tickets` | Lista os tickets. Aceita filtro por status (ex: `?status=open` ou `?status=closed`). |
| **PUT** | `/tickets/:id` | Atualiza informações do equipamento ou descrição do problema. |
| **PATCH** | `/tickets/:id/close` | Marca o ticket como fechado e adiciona a solução técnica. |
| **DELETE** | `/tickets/:id` | Remove um ticket do banco de dados. |

### 📝 Exemplos de Requisição

#### 1. Criar um Ticket (POST)
```json
POST /tickets
Content-Type: application/json

{
  "equipment": "Notebook Dell Latitude",
  "description": "Tela piscando intermitentemente",
  "user_name": "Alex Fernando"
}

PUT /tickets/:id
Content-Type: application/json

{
  "equipment": "Notebook Dell Latitude 5000",
  "description": "Tela pisca quando desconecta da tomada"
}

PATCH /tickets/:id/close
Content-Type: application/json

{
  "solution": "Atualização do driver de vídeo e troca da bateria."
}
```

## 🚀 Como Executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/).
Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

### 🎲 Passo a passo

```bash
# Clone este repositório
$ git clone [https://github.com/alexfrsm13/support-tickets-api.git](https://github.com/alexfrsm13/support-tickets-api.git)

# Acesse a pasta do projeto
$ cd support-tickets-api

# Instale as dependências (se houver package.json) ou apenas inicie:
$ npm install

# Execute o servidor (Modo Watch para Node v18+)
$ node --watch server.js
```

## 🧠 Aprendizados e Evolução

Diferente do projeto anterior, aqui foram implementados conceitos mais avançados de design de API:

- **Query Parameters:** Implementação manual de filtros de busca (ex: filtrar apenas tickets abertos).
- **Verbos Semânticos:** Diferenciação clara entre `PUT` (atualização completa de recurso) e `PATCH` (modificação parcial/status).
- **Datas Automáticas:** Gerenciamento de `created_at` e `updated_at` no banco de dados.
- **Regras de Negócio:** Lógica específica para fechamento de tickets (Status `'closed'`).

## 🦸 Autor

Feito com 💜 por **Alex**.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alex-fernando-0542aa279/)]([alex-fernando-0542aa279](https://www.linkedin.com/in/alex-fernando-0542aa279/))

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2026 Alex Fernando

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```