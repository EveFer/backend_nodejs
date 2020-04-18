const fs = require('fs')

function readdirPromise(pathToRead) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathToRead,(error, files) => {
            if(error) {
                reject(error)
                return
            }
            resolve(`The directory '${pathToRead}' read successfull and contain: \n ${files}`)
        })
    })
}

async function readDir() {
    const dirRead = await readdirPromise('newDirectory')
    return dirRead
}

readDir()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))