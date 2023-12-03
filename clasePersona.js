/* 
> Se declarará una clase Persona, la cual debe crearse con un nombre que identifique la instancia. 
> Habrá una variable estática utilizable para todos.
> Se comprobará la individualidad entre las dos instancias.
*/

class Persona {
    static role = "usuario"
    constructor(apellido,nombre,edad,ciudad){
        this.apellido = apellido
        this.nombre = nombre
        this.edad = edad
        this.ciudad = ciudad
    }
    imprimir=() => {console.log(this.apellido,this.nombre,this.edad,this.ciudad,Persona.role)} 
}

/* La palabra clave new se utiliza para instanciar una clase, 
creando así un objeto que hereda las propiedades y comportamientos definidos en la clase.*/

const alumno1 = new Persona("Holsbach","Macimiliano","33","Barranqueras")

const prof1 = new Persona("Bordon","Lucia","34","Barranqueras")

alumno1.imprimir()

/* Creación de una clase contador

¿Cómo lo hacemos? 
Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

> Definir clase Contador
> La clase se creará con un nombre, representando al responsable del contador.
> El contador debe inicializarse en 0
> Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
*/

class Contador {
    static contGlobal = 0
    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
        Contador.contGlobal++
    }
    contar(){
        this.contador++
    }
    getcontador(){
       return this.contador
    }
    static obtenercontGlobal(){
        return Contador.contGlobal
    }
    getContadorGlobal(){
        console.log(Contador.contGlobal)
    }
    getResponsable(){
        console.log(this.responsable)
    }
}

const responsable1 = new Contador("Maximiliano")

const responsable2 = new Contador("Lucia")


const responsable3 = new Contador("Lucia")

responsable1.contar()
responsable1.contar()
console.log(responsable1.getcontador())
responsable1.getResponsable()
responsable1.getContadorGlobal()





