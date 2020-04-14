const rmdirRecursive = (directory) => {
    fs.access(directory, (error) => {
      if (error) {
        console.log("No existe la ruta: " + error);
        return;
      }
      console.log('array', fs.readdirSync(directory))
      fs.readdirSync(directory).forEach((file) => {
        let currentPath = `${directory}/${file}`;
  
        if (fs.lstatSync(currentPath).isDirectory()) {
          console.log("is directory");
          rmdirRecursive(currentPath);
          // console.log("Directory ---", directory);
          //   fs.rmdir(directory, (error) => {
          //     if (error) {
          //       console.log("Error al eliminar el directorio 2: " + error);
          //       return;
          //     }
          //   });
        } else {
          fs.unlink(currentPath, (error) => {
            if (error) {
              console.log("No se elimino el archivo");
              return;
            }
            
          });
        }
        
      });
      // console.log("Directory ---", directory);
      // fs.rmdirSync(directory);
    });
    // console.log("Directory ---", directory);
    //   fs.rmdir(directory, (error) => {
    //     if (error) {
    //       console.log("Error al eliminar el directorio 2: " + error);
    //       return;
    //     }
    //   });
    console.log("Directory ---", directory);
        fs.rmdirSync(directory);
  };