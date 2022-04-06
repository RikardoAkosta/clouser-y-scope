const person = () => {
    let saveName  = 'Name';
    let age = 30;
    return {
        getName: () => {
            return saveName;
        },
        getAge: () => {
            return age;
        },
        setName:  (newName) => {
            saveName = newName;
        },
        setAge: (newAge) => {
            age = newAge;
        }
        
        
    }
};

newPerson = person();
console.log(newPerson.getName());//aqui podemos acceder a la funcion getName que es una variable privada
newPerson.setName('Juan');//aqui podemos cambiar el valor de la variable privada 
console.log(newPerson.getName());
newPerson.setAge(40);
console.log(newPerson.getAge());
    