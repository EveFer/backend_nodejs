const fs = require('fs')

fileName = './removed.txt'

fs.unlink(fileName, (error) => {
    if(error){
        console.log(`A ocurrido un error al borrar el archivo`)
    }
    console.log(`Se a eliminado el archivo '${fileName}' exitosamente`)
})


