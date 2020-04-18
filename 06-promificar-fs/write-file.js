const fs = require('fs')

function writeFilePromise(pathToWrite, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathToWrite, data, 'utf8', (error) => {
            if(error) {
                reject(error)
                return
            }
            resolve(`The file '${pathToWrite}' created successfull`)
        })
    })
}

async function createAFile() {
    const fileCreated = await writeFilePromise('test3.js', 'Esto es un file')
    return fileCreated
}

createAFile()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))