import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

const PORT = 3333;

async function listener(request, response) {
    await jsonHandler(request, response)
    routeHandler(request, response)
}

http.createServer(listener).listen(PORT)
console.log(`Servidor rodando na Porta ${PORT}`)