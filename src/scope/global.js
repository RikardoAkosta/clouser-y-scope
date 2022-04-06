var hello = `Hello`;//se puede acceder de forma golbal porque no esta en ninguna funcion se podria ejecutar con console.log(hello) no tendria problemas
let world = `Hello World`;
const helloWorld = `Hello World!`;



const anotherFuncion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFuncion ();

//sobrando todo el codigo y click derecho damos Run Code, vemos como se abra la terminal y nos muestra la salida que tiene en el scope global 
//es una mala practica si reasignamos con la palabra var un nuevo valor ej 
var hello = `Hello`;
var hello = `Hello +`;
//miestras que con let y const no se pueden reasignar valores solo es permitido con var el el scope global

/* otra mala es asignar una variable global dentro de una funcion ej
const helloWorld = () => {
    globalVar = `im global`;
}
helloWorld();
console.log(globalVar)
 yambie seria cuando reasignamos otra variable dentro de otra funcion */