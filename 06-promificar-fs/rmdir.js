const fs = require('fs')

function rmdirPromise(pathToDelete) {
    return new Promise((resolve, reject) => {
        fs.rmdir(pathToDelete, (error) => {
            if(error) {
                reject(error)
                return
            }
            resolve(`The directory '${pathToDelete}' deleted successfull`)
        })
    })
}

async function rmDir() {
    const dirDeleted = await rmdirPromise('newDirectory')
    return dirDeleted
}

rmDir()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))