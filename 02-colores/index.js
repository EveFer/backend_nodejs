/* String.prototype.sayHi = () => 'hola'  // mutar un prototypo no es una buena practica

const colors = require('colors/safe')

const name = 'Fer'

console.log(colors.green(name.sayHi())) */

// función que reciba el nombre Hola [name] son las {hora} color de color arcoiris

const colors = require('colors/safe')
const moment = require('moment')

const printNameWithHour = (name) => {
  const string = colors.rainbow(`Hola ${name} son las ${moment().format('LT')}`)
  console.log(string)
}

printNameWithHour('Amigos!!')
printNameWithHour('Charles')
