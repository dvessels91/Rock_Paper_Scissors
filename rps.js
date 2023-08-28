function getComputerChoice (strings) {
    let randomNumber = Math.floor(Math.random() *  strings.length); 
    return strings[randomNumber];
}

const myArray = ['Rock', 'Paper', 'Scissors'];
let randomItem = getComputerChoice(myArray)

console.log(randomItem)