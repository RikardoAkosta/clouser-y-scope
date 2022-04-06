/* las variables locales no podemos acceder desde el scope global */

const helloWorld = () => {
    const hello = `hello World`;
    console.log(hello);
};

helloWorld();
console.log(hello);/* no permite acceder a la variable desde el scope global porque la variable esta en un cope local */


/* vamos a ver otro ejemplo  */
 var scope = `i am global`;

 const functionScope = () => {
     var scope = `i am just a local`;
     const func = () => {
         return scope         
     }
     console.log(func());
 };

 functionScope();// vemos como al dar run code vemos que trae la variable local y no tama la variable local nos muestra i am just a local
 console.log(scope);//tendriamos que llamarla con el consolog para que muestre la variable local a esto se le llama AMBITO LEXICO 
 /* EL SCOPE LOCAL tiene dos ambitos el de funciones y el de bloque  */
