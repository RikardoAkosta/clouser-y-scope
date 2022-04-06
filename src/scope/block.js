/*  como manejar el scope en el bloque */

const fruits = () => {
    if(true){
        var fruits1 = `apple`;
        let fruits2 = `banana`;
        const fruits3 = `sandia `;
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    
}
fruits();
/* no se pueden ejecutaar las variables let y const porque estan fuera del bloque con var si se podria, tenemos que llvar estos dos console.log dentro de el bloque para que puedan ser ejecurtados
*/


/* segundo ejemplo  */

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);
/* si cambiamos la variable let por var el valor de la variable que esta dentro del bloque osea la local se trasmitira a la variable global, daria como resultado ambasn 2 - 2  */

/* tercer ejemplo */

const anotherFuncion = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
};
anotherFuncion();
/* si cambiamos la variable por let empezara a iterar y nos mostrara el resultado correcto de 1 2 3 4...9 , mientras que con la palabra var mostrara 10 veces el 10  */