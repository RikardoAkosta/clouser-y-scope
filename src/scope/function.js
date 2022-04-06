 /* Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado: */

const fruits = () => {
    var fruits = `apple`;
    console.log(fruits);
};
fruits();

console.log(fruits);//no esta definida la funcion en el scope global por eso no arroja ningun resultado

/* vamos a ver otro ejemplo  */

const anotherFunction = ()=> {
    var x = 1;
    var x = 2;
    let y = 1;
    /* let y = 2; */
    console.log(x);
    console.log(y);
}
anotherFunction();/* se debe tener cuidado de como asignar las variables ya que nos mostrara un error al ejecutar la funcion porque let ya esta asignada pero si comentamos la variable let y, ya nos nos mostrara
mas errores ya que con la palabra var si esposible reasignar una variable y esto nos puede generar un problema podemos ver como la variable x es reasignada*/
