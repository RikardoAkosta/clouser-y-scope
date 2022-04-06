a = 2;
var a;
console.log(a);


function nameOfDog() {
    var name = `pitu`;
    return function () {
        console.log(name);
    }
}
nameOfDog('Fido');