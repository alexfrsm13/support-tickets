import http from 'node:http'

import { jsonHandler } from './middlewares/jsonHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

async function listener(request, response) {
    await jsonHandler(request, response)
    routeHandler(request, response)
}

const PORT = 3333

http
    .createServer(listener)
    .listen(PORT, () => console.log(`Server is Running on Port ${PORT}`))