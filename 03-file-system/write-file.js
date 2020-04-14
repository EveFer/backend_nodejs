const fs = require('fs')

fileName = 'removed.txt'

fs.writeFile(fileName, 'Hola desde node', 'utf8', (error) => {
    if (error) {
        console.log(`Hubo un error al escribir el archivo ${fileName}`)
        return // Salida temprana , este retorna 'undefined'
    }
    console.log(`Termine de escribir el archivo '${fileName}'`)
})

/*
Cuando se lanza una salida temprana ```return ```
se termina de ejecutar la funcion y no se ejecuta las
siguientes lineas
*/
