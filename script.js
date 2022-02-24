// const settings = document.querySelector('settings')
// const setting = document.querySelector('setting')
// const upperCase = document.getElementById('uppercase')
// const lowerCase = document.getElementById('lowercase')
// const numbers = document.getElementById('numbers')
// const symbols = document.getElementById('symbols')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    // fromCharCode - method returns a string created from the specified sequence of UTF-16 code unites.
    // refering to character sets from w3schools will be crucial.
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,.'
    return symbols[Math.floor(Math.random()*symbols.length)]
}

console.log(getRandomSymbol())