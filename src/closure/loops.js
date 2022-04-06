const anotherFuncion = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
};
anotherFuncion(); //se pueden crear este tipo de closures de forma involuntaria es mejor usar las palabras reservadas let y const para evitar esto


const anotherFuncion1 = () => {
    for (let i = 0; i < 30; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
}
anotherFuncion1(); //aqui vemos el ámbito de bloque y clouser trabajar jusntos

//hallar los numeros primos hasta 100
const primos = () => {
    for (let i = 2; i < 100; i++){
        let esPrimo = true;
        for (let j = 2; j < i; j++){
            if (i % j === 0){
                esPrimo = false;
                break;
            }
        }
        if (esPrimo){
            console.log(i);
        }
    }
}
primos();