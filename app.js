const passwordBox = document.getElementById("password");

const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbol = "@#$%^&*()_+~{}[]<>/_=`";

const allChar = upperCase + lowerCase + number + specialSymbol;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += specialSymbol[Math.floor(Math.random()*specialSymbol.length)];
    while(length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
        passwordBox.value = password;
    }

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}