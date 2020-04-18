const http = require('http')

const server = http.createServer((request, response)=>{
    console.log(request.method)
    console.log(request.url)
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    if(request.url === '/hola'){
        response.write('<h1>Hola mundo desde Node HTTP ^^</h1>')
    }
    if(request.url === '/adios'){
        response.write('<h1>Adios desde Node</h1>')
    }
    
    response.end()
})

server.listen(8080)