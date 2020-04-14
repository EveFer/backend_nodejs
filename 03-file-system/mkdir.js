const fs = require('fs')

path = 'newDirectory'

fs.mkdir(path, (error) => {
    if(error) {
        console.log(`No se logro crear el directorio '${path}'`)
    }
    console.log(`Se creo correctamente el directorio '${path}'`)
})