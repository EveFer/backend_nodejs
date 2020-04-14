const fs = require('fs')

path = './write.txt'

fs.readFile(path, 'utf8', (error, data) => {
    if(error){
        console.error(`Ocurrio un Error: ${error}`)
        return
    }
    console.log('El archivo contiene: ' + data)
})
