const fs = require('fs')

function appendFilePromise(pathToAppend, dataToAdd) {
    return new Promise((resolve, reject) => {
        fs.appendFile(pathToAppend, dataToAdd, 'utf8', (error)=> {
            if(error){
                reject(error)
                return
            }
            resolve(`The file '${pathToAppend}' to added successfull ${dataToAdd}`)
        })
    })
}

async function appendAFile() {
    const fileAppend = await appendFilePromise('test.js', '\n date added')
    return fileAppend
}

appendAFile()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))