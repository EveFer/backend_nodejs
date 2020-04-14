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
    if(error) {
      console.log(`No se logro encontrar el path D: ${error}`)
    }
    files = fs.readdirSync(path); // obtener el array de archivos del directorio
    console.log(files)
    files.forEach((file)=> {
      let currentPath = `${path}/${file}`; // file o directory actual
      if(fs.lstatSync(currentPath).isDirectory()){ // si es directorio
        rmdirRecursive(currentPath);
      }else {
        fs.unlinkSync(currentPath) // si no es un file y se elimina
      }
    })
    fs.rmdirSync(path) // elimina el directorio vacio
  })
}

rmdirRecursive(path);



