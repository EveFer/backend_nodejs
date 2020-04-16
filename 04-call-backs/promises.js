//wrappear -> envolver

// Una promesa es un Objeto en JS Representa el resultado de una ejecucion asíncrona
// callback hell --> anidacion de callbacks  (problema con JS con los callbacks)
// Las promesas resuelve la parte de callbacks hell


// promesas tienen 3 estado
// 1.- Pending --> estado inicial, aun no se resuelve
// 2.- Resolved --> estado de aceptacion, se ejecutó satisfactoriamente
// 3.- Rejected --> Estado de rechazo, ocurrio algun error en la ejecución

/*
 Promise((resolve, reject)=>{ --> resolve y reject son funciones
    if (todo ok){
        resolve('ok') --> regresar la promesa
        return
    }
    reject('error')
 }) --> constructor de promesa
// const miPrimerPromesa = new Promise() --> crear una promesa

miPRimerPromesa
 .then((result)=>{ // recibe lo que se le pasa en el resolve

 })
 .catch((error)=>{})

*/


/*
function miPrimerPromesa () {
    return new Promise((resolve, reject)=>{
        if(todo mal) {
            reject('Todo esta en llamas')
            return
        }
        resolve('todo super bien')
    })
} 

miPrimeraPromesa()
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

*/

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

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
        muroAAplanar.estaAplanado = true
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


// PROMIFICACION -> El proceso de wrappear una function que hace uso de callbacks para que ahora sea una promesa
function construirPromificada (muroAConstruir) {
    return new Promise((resolve, reject)=>{
        construir(muroAConstruir, (error, muroConstruido)=>{
            if(error){
                reject(error) // by past - no se raliza ninguna modificacion
                return
            }
            resolve(muroConstruido)
        })
    })
}

function aplanarPromificada(muroAAplanar) {
    return new Promise((resolve, reject)=> {
        aplanar(muroAAplanar, (error, muroAplanado)=>{
            if(error){
                reject(error) // by past - no se raliza ninguna modificacion
                return
            }
            resolve(muroAplanado)
        })
    })
}

function pintarPromificada(muroAPintar) {
    return new Promise((resolve, reject)=>{
        pintar(muroAPintar, (error, muroPintado)=> {
            if(error){
                reject(error) // by past - no se raliza ninguna modificacion
                return
            }
            resolve(muroPintado)
        })
    })
}

// construirPromificada(muro)
//     .then(muroConstruido=>{
//         console.log('muroConstruido: ', muroConstruido)
//         aplanarPromificada(muroConstruido)
//             .then(muroAplanado => {
//                 console.log('muro Aplanado: ', muroAplanado)
//                 pintarPromificada(muroAplanado)
//                     .then(muroPintado => {
//                         console.log('muro Pintado: ', muroPintado)
//                     })
//                     .catch(error => console.log('error ', error))
//             })
//             .catch( error => console.log('error ', error))
//     })
//     .catch( error =>console.log('error ', error))

// promise hell

// async/await
//  donde use await, la funcion que lo contine debe ser marcada como asincrona
//  las funciones marcadas con async, regresan una promesa por default
//    y si devuelven algo son obtenidas en el .then()

async function principal() {
    const muroConstruido = await construirPromificada(muro)
    console.log('muroConstruido: ', muroConstruido)
    const muroAplanado = await aplanarPromificada(muroConstruido)
    console.log('muro Aplanado: ', muroAplanado)
    const muroPintado = await pintarPromificada(muroAplanado)
    console.log('muro Pintado: ', muroPintado)
    return muroPintado
}

principal()
    .then((resultado)=> {
        console.log('Resultado: ',resultado)
        console.log('Fin')
    })
    .catch(error => console.error('Error: ', error))