let people = [
    {id: 1,firstName:"luz",lastName:"escalante",age:25,gender:"f"},
    {id: 2,firstName:"eruno",lastName:"guerra",age:18,gender:"m"}
]//Los array o series de tipo vector o matriz, tambien son considerados objetos. 

let person = people.find(p=>{
    let test
    test = p.id ===2
    return test
})//Las funciones simples son considerados tipos de datos objeto.

console.log(person)

console.log(typeof(person))
console.log(typeof(people))

/*
ECMASCRIPT: Es un standar que se encarga de regir como debe 
ser interpretado el lenguaje. 

Declaración de variables, se las realiza con 
let : Variables
const : constantes son tipos de datos que pueden mutar,
siempre que sus elementos internos lo permitan como un array 
Se limitan al scope o bloque en donde fueron declaradas

Antes se utilizaba var, pero ya no se recomienda su uso

*/

let i = 0 // variable global
function foo(){
    i = 1 // asignando un nuevo valor a la variable global
    let j = 2 // variable local
    if(true){
        console.log(i)
        console.log(j)
    }
}
foo()


function foot(){
    let i = 0 // variable local de la función
    if(true){
        let i = 1 // variable local del condicional
        console.log(i)
    }
    console.log(i)
}

foot()

const mystring = "Hola mundo"

console.log(mystring)

//mystring = "Hello world"//No se puede asignar a mystring xq esta es una constante

const mynumber = [1,2,3,4,5,6]//Nos permite realizar los cambios por sus propiedades mutables
console.log(mynumber)
mynumber[0]=2
console.log(mynumber)
mynumber[5]=7
console.log(mynumber)

/**Las funciones son bloques de instruciones que trabajan sobre un scope interno */

function nombreDeLaFuncion(parametro){
    let variableParaMiFuncion = 2
    return variableParaMiFuncion
}

function sumanumeros(numero1,numero2){
    let resultado
    resultado = numero1 + numero2
    return resultado
}

let total = sumanumeros(10,20)

console.log(total)

let variable = nombreDeLaFuncion()

console.log(variable)

function mylist(array){
    if(array.length == 0){
        console.log("La lista esta vacia")
    }else{
        for(let i = 0; i < array.length; i++){
            console.log(array[i])
        }
    }
}

const miarray = [1,2,3,4,5,6]

mylist(miarray)