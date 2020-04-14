const fs = require('fs')

path = 'newDirectory2'

fs.mkdir(path, (error) => {
    if(error) {
        console.log(`No se logro crear el directorio '${path}'`)
    }
    console.log(`Se logro crear el directorio ${path}`)
    
    fs.rmdir(path, (error) => {
        if(error) {
            console.log(`No se logro eliminar el directorio '${path}'`)
        }
        console.log(`Se logro eliminar el directorio '${path}'`)
    })
})