const express = require('express')
const fs = require('fs')

// instancia de express
const app = express() // regresa una instancia de express | nuevo servidor

// app.[get|post|delete|patch|put](ruta, requestHandler)
app.get('/', (request, response)=>{
    // endpoint --> punto final de la informacion de una API
    response.write('Hello World!! ^^')
    response.end()
})

// Endpoint es la combinacion de una ruta y de metodo


app.get('/hola', (request, response) => {
    response.json({
        message: 'Hola en json'
    })
    response.end()
})

app.get('/adios', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'application/json'
    })
    const responseObject = {
        message: 'Adios'
    }
    response.write(JSON.stringify(responseObject))
    response.end()
})

app.post('/', (request, response) => {
    response.status(201)
    response.json({
        message: 'POST a root'
    })
})

app.delete('/', (request, response) => {
    response.json({
        message: 'Delete a root'
    })
})


// -------- read content File with fs and promise

function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToRead, 'utf8', (error, content) => {
            if(error){
                reject(error)
                return
            }
            const fileObject = {
                pathToRead,
                content
            }
            resolve(fileObject)
        })
    })
}

app.get('/read', (request, response) => {
    const pathToRead = 'file.txt'
    readFilePromise(pathToRead)
        .then(fileObject =>{
            console.log('yei!')
            response.json(fileObject)
        })
        .catch(error => {
            console.log('D;')
            response.json({
                error: error
            })
        })
})

app.listen(8080, () => {
    console.log('Server running')
})