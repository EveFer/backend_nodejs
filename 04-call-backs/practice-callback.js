const koder = {
    isCalled:false,
    isInterviewed:false,
    isApart:false,
    isTookFirstClass:false
}

function call(koderToCall, callback) {
    setTimeout(()=>{
        koderToCall.isCalled = true
        let error = koderToCall.isCalled
            ? null
            : 'No se logro la llamada al koder'
        callback(error, koderToCall)
    }, 3000)
}

function interview(koderToInterviewed, callback) {
    setTimeout(()=>{
        koderToInterviewed.isInterviewed = true
        let error = koderToInterviewed.isInterviewed
            ? null
            : 'No se logro la entrevista al koder'
        callback(error, koderToInterviewed)
    }, 3000)
}

function apart(koderToApart, callback) {
    setTimeout(()=>{
        koderToApart.isApart = true
        let error = koderToApart.isApart
            ? null
            : 'No se logro apartar el lugar del koder'
        callback(error, koderToApart)
    }, 3000)
}

function takeToFirstClass(koderToTakeFirstClass, callback) {
    setTimeout(()=>{
        koderToTakeFirstClass.isTookFirstClass = true
        let error = koderToTakeFirstClass.isTookFirstClass
            ? null
            : 'El koder no logro tomar su primera clase'
        callback(error, koderToTakeFirstClass)
    }, 3000)
}

// call(koder, (errorToCalled, koderCalled)=>{
//     if (errorToCalled) {
//         console.error('Error: '+ errorToCalled)
//         return
//     }
//     console.log('Se logro llamar al koder')
//     interview(koderCalled, (errorToInterviewed, koderInterviewed)=>{
//         if (errorToCalled) {
//             console.error('Error: '+errorToInterviewed)
//             return
//         }
//         console.log('Se logro la entrevista al koder')
//         apart(koderInterviewed, (errorToApart, koderReserved)=>{
//             if(errorToApart) {
//                 console.error('Error: '+errorToApart)
//                 return
//             }
//             console.log('Se logro Reservar el lugar al koder')
//             takeToFirstClass(koderReserved, (errorToTakeFirstClass, koderTookClass)=> {
//                 if(errorToTakeFirstClass){
//                     console.error('Error: '+errorToTakeFirstClass)
//                     return
//                 }
//                 console.log(koderTookClass)
//                 console.log('Koder Tomo su primera clase ^^')
//             })
//         })
//     })
// })

console.log(koder)

//PROMIFICADA

function callToKoderPromise(koderToCall) {
    return new Promise((resolve, reject)=> {
        call(koderToCall, (error, koderCalled)=> {
            if(error){
                reject(error)
                return
            }
            resolve(koderCalled)
        })
    })
}

function interviewToKoderPromise(koderToInterview) {
    return new Promise((resolve, reject)=>{
        interview(koderToInterview, (error, koderInterviewed)=> {
            if(error){
                reject(error)
                return
            }
            resolve(koderInterviewed)
        })
    })
}

function reservedToPlacePromise(koderToReserve) {
    return new Promise((resolve, reject)=> {
        apart(koderToReserve, (error, koderReserved) => {
            if(error) {
                reject(error)
                return
            }
            resolve(koderReserved)
        })
    })
}

function takeClassKoderPromise(koderToTakeClass) {
    return new Promise((resolve, reject)=> {
        takeToFirstClass(koderToTakeClass, (error, koderTookClass)=> {
            if(error){
                reject(error)
                return
            }
            resolve(koderTookClass)
        })
    })
}

// callToKoderPromise(koder)
//     .then(koderCalled => {
//         console.log('Koder Called: ', koderCalled)
//         interviewToKoderPromise(koderCalled)
//             .then(koderInterviewed => {
//                 console.log('Koder Interviewed: ', koderInterviewed)
//                 reservedToPlacePromise(koderInterviewed)
//                     .then(koderReserved => {
//                         console.log('Koder Reserved: ', koderReserved)
//                         takeClassKoderPromise(koderReserved)
//                             .then(koderHappy => {
//                                 console.log('Koder in Class: ', koderHappy)
//                             })
//                             .catch(error => (console.log('Error: ', error)))
//                     })
//                     .catch(error => (console.log('Error: ', error)))
//             })
//             .catch(error => (console.log('Error: ', error)))
//     })
//     .catch(error => (console.log('Error: ', error)))


   async function processRegisterKoder(){
        const koderCalled = await callToKoderPromise(koder)
        console.log('koderCalled')
        const koderInterviewed = await interviewToKoderPromise(koderCalled)
        console.log('koderInterviewed')
        const koderReserved = await reservedToPlacePromise(koderInterviewed)
        console.log('koderReserved')
        const koderTookClass = await takeClassKoderPromise(koderReserved)
        console.log('koderTookClass')
        return koderTookClass
    }

    processRegisterKoder()
        .then(result=>{
            console.log('result: ', result)
            console.log('Hay un koder feliz')
        })
        .catch(error => (console.log('Error: ', error)))