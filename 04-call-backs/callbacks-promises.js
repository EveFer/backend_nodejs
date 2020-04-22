
const muro1 = {
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
    }, 4000)
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







// --------------------- PRomises - promificando

// const promesa = new Promise((resolve, reject)=> {
    //     if(sale mal){
    //         reject('Salio algo mal')
    //     }
    //     resolve('Todo supe!!')
    // })
    
    // promesa
    //     .then(()=> {
    
    //     }) // cuando todo salio super bien
    //     .catch((error)=> {
    
    //     }) // algo sale mal
    
    function construirPromificada(muroAConstruir) {
        return new Promise((resolve, reject)=> {
            construir(muroAConstruir, (error, muroConstruido)=>{
                if(error) {
                    reject(error)
                    return
                }
                resolve(muroConstruido)
            })
        })
    }

    function aplanarPromificada(muroAAplanar) {
        return new Promise((resolve, reject)=> {
            aplanar(muroAAplanar, (error, muroAplanado) => {
                if(error) {
                    reject(error)
                    return
                }
                resolve(muroAplanado)
            })
        })
    }

    function pintarPromificada(muroAPintar) {
        return new Promise((success, fail)=> {
            pintar(muroAPintar, (error, muroPintado)=> {
                if(error){
                    fail(error)
                    return
                }
                success(muroPintado)
            })
        })
    }

    
    // construirPromificada(muro1)
    //     .then((muroConstruido)=> {
    //         console.log('Se constuyo el muro ', muroConstruido)
    //         aplanarPromificada(muroConstruido)
    //             .then((muroAplanado)=> {
    //                 console.log('El muro se aplano: ', muroAplanado)
    //                 pintarPromificada(muroAplanado)
    //                     .then((muroPintado)=> {
    //                         console.log('muro pintado: ', muroPintado)
    //                     })
    //                     .catch(error => (console.log('Error: ', error)))
    //             })
    //             .catch(error => (console.log('Error: ', error)))
    //     })
    //     .catch(error => (console.log('Error: ', error)))

    // async await
    
    async function createMuro() {
        const muroConstruido = await construirPromificada(muro1)
        console.log('Muro se construyo')
        const muroAplanado = await aplanarPromificada(muroConstruido)
        console.log('Muro Aplando')
        const muroPintado = await pintarPromificada(muroAplanado)
        console.log('Muro pintado: ')
        return muroPintado
    }

    createMuro()
        .then((muroFinal)=> {
            console.log('Todo super bien!!', muroFinal)
        })
        .catch(error => (console.log('Error: ', error)))

    
