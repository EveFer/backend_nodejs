const fs = require("fs");

path = "newDirectory";

/*
PseudoCodigo


const rmdirRecursive = (path) => {
  Si existe el path
    files = readdir(path)
    files.forEach((file)=> {
      let currentPath = `${path}/{file}`
      if(current is a Directory){
        rmdirRecursive(currentPath)
      }else{
        unlink(currentPath)
      }
    })
    rmdir(path) // cuando ya este vacio
  de lo contrario:
    console.log('No Existe el path')
}


*/

const rmdirRecursive = (path) => {
  fs.access(path, (error) => { // Verificar si existe el path
    
    files = fs.readdirSync(path); // obtener el array de archivos del directorio
    console.log(files)
    files.forEach((file)=> {
      let currentPath = `${path}/${file}`; // file o directory actual
      const fileStat = fs.statSync(currentPath)
      if(fileStat.isDirectory()){ // si es directorio
        rmdirRecursive(currentPath);
      }else {
        fs.unlinkSync(currentPath) // si no es un file y se elimina
      }
    })
    console.log(path)
    fs.rmdirSync(path) // elimina el directorio vacio
  })
}

rmdirRecursive(path);

// const rmdirRecur = (path) => {
//   files.readdir(path, 'utf8', (error, files) => {
//     if(error){
//       console.error('No se pudo leer el archivo: '+ error)
//       return
//     }
//     files.forEach((file)=> {
//       let newPath = `${path}/${file}`
//       fs.unlink(newPath, (error) => {
//         if(error) {
//           console.error('No pudo eliminal el archivo: '+ error)
//           return
//         }
//       })
//     })


//   })
// }


function rmdir(pathToDelete) {
  const files = fs.readdirSync(pathToDelete)
  files.forEach((file, index) => {
    const pathFile = `${pathToDelete}/${file}`
    const fileStat = fs.statSync(pathFile)
    if(fileStat.isDirectory()){
      rmdir(pathFile)
    }else {
      fs.unlinkSync(pathFile)
    }
  })
  fs.rmdirSync(pathToDelete)
}

// rmdir(path)