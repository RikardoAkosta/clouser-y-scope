const  buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myCount1 = buildCount(10);
myCount1();
myCount1();
myCount1();
/* en estos ejemplos hacemos uso de copilot para verificar el us de las funciones en el ambito lexico y como este puede tomar varias variables con funciones  */

//hallar el ambito lexico de una funcion
const  buildCount1 = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};