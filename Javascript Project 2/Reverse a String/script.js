//Reverse a String: Write a function that reverses a given string.

let myString = "Customizing Neovim on Linux Ubuntu 22.04 involves configuring its settings, installing plugins, and possibly tweaking the appearance. Here's a basic guide:Install Neovim: If you haven't already installed Neovim, you can do so via the terminal using: "


/*First Method*/
function reverseString(){

    return myString.split(" ").reverse().join(" ");
}

console.log(reverseString(myString))

/*Second Method*/
function reverseString (param) {
    let car = ""
    let words = []
    let string = "";

        for(let i = 0 ; i < param.length; i++){

            car =  car + param[i]

            if(param[i] == " "){
                words.unshift(car)
                car = ""
            }
        }
        for(let j = 0 ; j<words.length ; j++){
            string+=words[j] + "";
        }
        return string
}

console.log(reverseString(myString))