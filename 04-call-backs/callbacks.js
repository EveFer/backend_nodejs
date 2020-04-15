/**
 * REQ: CONSTRUIR, APLANAR Y PINTAR una pared
 * 1.- construir la pared
 * 2.- aplanar la pared
 * 3.- pintar una pared
 * 
 */

 const muro = {
     estaConstruido: false,
     estaAplanado: false,
     estaPintado: false
 }

// function construir(muroAConstruir) {
//     muroAConstruir.estaConstruido = true;
//     return muroAConstruir
//  }
//  function aplanar(muroAAplanar) {
//     muroAAplanar.estaAplanado = true;
//     return muroAAplanar
//  }
//  function pintar(muroAPintar) {
//     muroAPintar.estaPintado = true;
//     return muroAPintar
//  }

//  construir(muro)
//  aplanar(muro)
//  pintar(muro)

// const muroConstruido = construir(muro)
// const muroAplanado = aplanar(muroAplanado)
// const muroPintado = pintar(muroAplanado)

//  console.log(muro)
//  console.log(muroAplanado)


/* Realizar - Con callback */

function construir(muroAConstruir, callback){
    setTimeout(()=>{
        let error = null
        muroAConstruir.estaConstruido = true
        if(muroAConstruir.estaConstruido === false){
            error = 'No se puedo construir el muro'
        }
        callback(error, muroAConstruir)
    },3000)
}

function aplanar(muroAAplanar, callback) {
    setTimeout(()=>{
        muroAAplanar.estaAplanado = false
        let error = muroAAplanar.estaAplanado 
            ? null 
            : 'No se pudo aplanar'
        callback(error, muroAAplanar)
    }, 3000)
}

function pintar(muroAPintar, callback) {
    setTimeout(()=>{
        muroAPintar.estaPintado = true
        let error = muroAPintar.estaPintado
            ? null
            : 'No se pudo pintar'
        callback(error, muroAPintar)
    }, 3000)
}

construir(muro, (errorDeConstruccion, muroConstruido)=> {
    if(errorDeConstruccion){
        console.error('Error de construccion: '+ errorDeConstruccion)
        return
    }
    console.log('Muro Construido')
    aplanar(muroConstruido, (errorDeAplanado, muroAplanado)=> {
        if(errorDeAplanado){
            console.error('Error de Aplanar: '+ errorDeAplanado)
            return
        }
        console.log('Muro Aplanado')
        pintar(muroAplanado, (errorDePintado, muroPintado)=> {
            if(errorDePintado){
                console.error('Error de pintado: '+ errorDePintado)
                return
            }
            console.log('Muro Pintado ')
            console.log(muroPintado)
        })
    })
})
console.log(muro)