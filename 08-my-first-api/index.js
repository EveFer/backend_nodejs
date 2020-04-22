

/**
 * API (Aplication Programming Interface)
 Es un intermadiario para el envio de datos
 La interface que ayudara a comunicar a un cliente con los datos (Puente entre el cliente y la informacion)
 Interface -> El medio por el cual algo puede ser utilizado, como interactuamos con un tercero

 Para que puedan ser utilizadas por otro software

No todas la API's usan Metodos de http, Rest Ful

API --> fs, express


REST y RESTful

Rest es una arquitectura

Caracteristicas:
    - Un protocolo cliente/servidor sin estado HTTP ()
    - Conjunto de operaciones bien definidas (GET, POST, DELETE, PUT)
    - Sintaxis universal (/recurso/identificacion)
    - Uso de Hipermedio (HTML, XML, JSON)


    Estado -> información que se guarda en el servidor

RESTful es un servicio que implementa REST
*/

const express = require('express')
const fs = require('fs')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()

server.use(express.json()) // middleware - parsea la peticion a json


// Endpint: combinación de un metodo y una ruta
// metodo: GET, POST, PUT, DELETE, PATCH
// ruta: string que denotan recursos en nuestro servidor
server.get('/', (request, response) => {
    response.json({
        message: 'First API is running'
    })
})

server.get('/koders', (req, res) => {
    res.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders
        }
    })
})

server.post('/koders', (req, res) => {
    const newKoder  = {
        name: req.body.name,
        generation: req.body.generation
    }
    kodemia.koders.push(newKoder)
    res.json({
        message: 'New koder added',
        data: {
            koder: newKoder
        }
    })
})

server.get('/mentors', (req, res) => {
    res.json({
        message: 'All the mentors',
        data: {
            mentors: kodemia.mentors
        }
    })
})

server.post('/mentors', (req, res) => {
    const newMentor = req.body
    kodemia.mentors.push(newMentor)
    res.json({
        message: 'New Mentors Added',
        data: {
            mentor: newMentor
        }
    })
})

server.listen(8080, ()=> {
    console.log('Server running in localhost:8080')
})
