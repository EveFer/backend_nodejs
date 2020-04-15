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

call(koder, (errorToCalled, koderCalled)=>{
    if (errorToCalled) {
        console.error('Error: '+ errorToCalled)
        return
    }
    console.log('Se logro llamar al koder')
    interview(koderCalled, (errorToInterviewed, koderInterviewed)=>{
        if (errorToCalled) {
            console.error('Error: '+errorToInterviewed)
            return
        }
        console.log('Se logro la entrevista al koder')
        apart(koderInterviewed, (errorToApart, koderReserved)=>{
            if(errorToApart) {
                console.error('Error: '+errorToApart)
                return
            }
            console.log('Se logro Reservar el lugar al koder')
            takeToFirstClass(koderReserved, (errorToTakeFirstClass, koderTookClass)=> {
                if(errorToTakeFirstClass){
                    console.error('Error: '+errorToTakeFirstClass)
                    return
                }
                console.log(koderTookClass)
                console.log('Koder Tomo su primera clase ^^')
            })
        })
    })
})

console.log(koder)