//Factorial: Write a function to calculate the factorial of a given number.


let factorial=1;

function Factorial(num){
    
    if(num==0 || num==1){
        return "The factorial of " + num + " is : " + factorial;
    }else{
        while (num > 1) { 
            factorial *= num;
            num--;
        }
        return "The factorial of is : " + factorial;
    }
}

console.log(Factorial(5))