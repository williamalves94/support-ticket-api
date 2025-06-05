🎟️ Gerenciamento de Tickets

Uma API RESTful simples para gerenciamento de tickets, desenvolvida com Node.js e JavaScript puro. 
Ideal para fins de estudo ou projetos pequenos, utiliza um banco de dados local baseado em arquivos JSON ou estrutura em memória.

🚀 Funcionalidades

📌 Criar um novo ticket
📋 Listar todos os tickets
🔍 Buscar um ticket por ID
✏️ Atualizar um ticket
🗑️ Deletar um ticket

🛠️ Tecnologias e Conceitos Usados

- Node.js
- JavaScript (ES6+)
- Middlewares personalizados
- Padrão MVC (Model - View - Controller)
- Banco de dados local (JSON ou array em memória)

📁 Estrutura de Pastas
/src
├── controllers/
│ └── tickets/
│ ├── create.js
│ ├── index.js
│ ├── remove.js
│ ├── update.js
│ └── updateStatus.js
├── database/
| ├── database.js
│ └── db.json
├── middlewares/
│ ├── jsonHandler.js
│ └── routeHandler.js
├── routes/
| ├── index.js
│ └── tickets.js
├── utils/
| ├── extractQueryParams.js
│ └── parseRoutePath.js
server.js
package.json

<img src="/assets/ticket-api-capa.jpg" alt="Descrição" width="900">
