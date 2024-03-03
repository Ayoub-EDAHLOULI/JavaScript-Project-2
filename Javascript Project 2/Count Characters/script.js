//Count Characters: Create a function that counts the number of characters in a string.

let myString = "Customizing Neovim on Linux Ubuntu 22.04 involves configuring its settings, installing plugins, and possibly tweaking the appearance. Here's a basic guide:Install Neovim: If you haven't already installed Neovim, you can do so via the terminal using:"

/*Simple Code Using function with loops*/

function CountCharacter(){

    let counter=0;
    
    for(let i=0;i<myString.length;i++){
        if(myString[i]!==""){
            counter+=1;
        }
    }
    return counter;
}

console.log(CountCharacter(myString));

/*Simple Code Using function with trim() methods*/


function CountCharacter(){

    return myString.trim().length;
}

console.log(CountCharacter(myString));