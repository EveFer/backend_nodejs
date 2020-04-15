/* Charless */

function rmdir(pathToDelete) {
    fs.access(pathToDelete, error => {
      if(error) {
        console.error(`Path ${pathToDelete} does not exists`)
        return
      }
      // aqui ya se que el path existe
      fs.stat(pathToDelete, (error, stats)=> {
        if(error){
          console.error('No se pudo leer el path', pathToDelete)
          return
        }
        if(stats.isDirectory()){
          fs.readdir(pathToDelete, (error, files)=> {
            if(error){
              console.error('No se pudo leer la carpeta: ', error)
              return
            }
            files.forEach((file, index) => {
              const pathFile = `${pathToDelete}/${file}`
              fs.stat(pathFile, (error, fileStats)=> {
                if(fileStats.isDirectory()){
                  // recursividad
                  rmdir(pathFile)
                }else {
                  fs.unlink(pathFile, (error) => {
                    console.log(`El archivo ${pathFile} fue borrado`)
                    if((files.length - 1) === index){
                      fs.rmdir(pathFile, (err) => {
                        if(err) {
                          console.error('No se pudo borrar la carpeta')
                          return
                        }
                        console.log('carpeta borrada')
                      })
                    }
                    return
                  })
                }
              })
            })
            if (files.length === 0) {
              fs.rmdir(pathToDelete, (error) => {
                if(error){
                  console.error('No se pudo borrar la carpeta final')
                  return
                }
                consolelog('Se logro borrar el directorio')
              })
            }
          })
          return
        }
        console.error('EL path esta apuntando a un archivo no a una carpeta')
      })
    })
  }
  
  /**
   Casos de prueba
   una carpte con archvio
   una carpeta con archivos y  carpetas vacias
   una carpeta con archivos y  carpetas con archivos
   una carpeta sin archivos
   */

  //  call-back hell