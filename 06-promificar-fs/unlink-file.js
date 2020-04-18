const fs = require('fs')

function unlinkFilePromise(pathToDelete) {
    return new Promise((resolve, reject) => {
        fs.unlink(pathToDelete, (error) => {
            if(error){
                reject(error)
            }
            resolve(`The file '${pathToDelete}' deleted successfull`)
        })
    })
}

async function unlinkAFile() {
    const fileDeleted = await unlinkFilePromise('test.js')
    return fileDeleted
}

unlinkAFile()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))