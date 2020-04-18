const fs = require('fs')

function readFilePromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToRead, 'utf8', (error, data) => {
            if(error){
                reject(error)
                return
            }
            resolve(`The file '${pathToRead}' read successfull and contain: \n ${data}`)
        })
    })
}

async function readAFile() {
    const fileRead = await readFilePromise('test.js')
    return fileRead
}

readAFile()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))