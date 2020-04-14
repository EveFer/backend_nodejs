const fs = require('fs')

path = './newDirectory/newFile.txt'
pathRead = './newDirectory'

fs.writeFile(path, 'utf8', (error) => {
    if(error) {
        console.log(`No se logro crear el archivo '${path}'`)
    }

    fs.readdir(pathRead,(error, files) => {
        if(error) {
            console.log(`No se logro leer el directorio '${pathRead}'`)
        }
        console.log('El contenido del directorio son: ')
        console.log(files)
    })
})