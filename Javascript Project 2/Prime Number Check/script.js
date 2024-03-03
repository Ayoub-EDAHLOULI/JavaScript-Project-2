//Prime Number Check: Create a function to check if a number is prime or not.


let prime=true;
const number = parseInt(prompt("Enter a positive number: "));

function PrimeNumberCheck(number){

    if(number==1){

        console.log("1 is neither prime nor composite number.");
        return false

    }else if(number>1){

        for(let i=2;i<number;i++){

            if (number % i == 0) {
                prime = false;
                break;
            }    
        }
        if (prime==true){ console.log(`${number} is a prime number`); return true} 
        else { console.log(`${number} is not a prime number`); return false }
    
    }else {
        console.log("The number is not a prime number.");
    }
}

console.log(PrimeNumberCheck(number))