const fs = require('fs')

srcFile = './write.txt'
destFile = './copied.txt'

fs.copyFile(srcFile, destFile, (error) => {
    if(error) {
        console.log(`Ocurrio un error al copiar el archivo '${srcFile}'`)
    }
    console.log(`Se a copiado exitosamente al archivo '${srcFile}' a '${destFile}'`)

    fs.readFile(destFile, 'utf8', (error, dataFile) => {
        if(error){
            console.log(`Ah ocurrido un error al leer el archivo '${destFile}'`)
        }
        console.log(`El archivo '${destFile}' contiene: \n ${dataFile}`)
    })
})