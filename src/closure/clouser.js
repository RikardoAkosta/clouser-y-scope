const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);
/* se realizo una alcancia pero si observamos no va sumando o guardando los elementos tendria que dar 15 osea que no hay un clouser */




/* ejemplo pero que si genere clouser segun el AMBITO LEXICO */

const moneyBox1 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    } 
    return countCoins;
    
};

let myMoneyBox = moneyBox1();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
/* en este ejemplo si recuerda el valor anterior o el ambito anterior  */
