const fs = require('fs')

function copyFilePromise(pathToCopy, destFile) {
    return new Promise((resolve, reject) => {
        fs.copyFile(pathToCopy, destFile, (error) => {
            if(error) {
                reject(error)
                return
            }
            resolve(`The file '${pathToCopy}' copied successfull to ${destFile}`)
        })
    })
}

async function copyAFile() {
    const fileCopied = await copyFilePromise('test.js', 'test2.js')
    return fileCopied
}

copyAFile()
    .then(result=> {
        console.log(result)
    })
    .catch(error=> console.error('Error: ',error))