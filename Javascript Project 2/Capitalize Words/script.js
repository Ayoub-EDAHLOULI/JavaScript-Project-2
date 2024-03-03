//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

let myString = "Customizing Neovim on Linux Ubuntu 22.04 involves configuring its settings, installing plugins, and possibly tweaking the appearance. Here's a basic guide:Install Neovim: If you haven't already installed Neovim, you can do so via the terminal using: "

function CapitalizeWords(myString){

    let car = ""
    let words = []
    let string = ""
    let result = "";

    for(let i = 0 ; i < myString.length; i++){

        car =  car + myString[i]

        if(myString[i] == " "){
            string=car.charAt(0).toUpperCase() +car.slice(1,car.length)
            words.push(string)
            car = ""
        }
    }

    for(let j=0;j<words.length;j++){
        result+=words[j] + "";
    }

    return result;

}
console.log(CapitalizeWords(myString))
