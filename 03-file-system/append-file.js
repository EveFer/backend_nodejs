const fs = require('fs')

path = './write.txt'
data = `
    Fernanda a agregado esta linea
    =n_n=
`

fs.appendFile(path, data, 'utf8', (error)=> {
    if(error){
        console.log('Ocurrio un error D:')
        return
    }
    console.log('Se ha agregado correctamente al archivo')
})