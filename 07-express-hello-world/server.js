const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    response.write('<h1>Hola!! ^^</h1>')
    response.end()
})

server.listen(8080)