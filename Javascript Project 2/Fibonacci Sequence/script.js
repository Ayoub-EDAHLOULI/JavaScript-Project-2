//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

let N1=0;
let N2=1;
let Sum=N1+N2;
const number = parseInt(prompt(`Enter A Positive Number : `));


function FibonacciSequence(number){

    console.log("Fibonacci Sequence : ");
    console.log(N1);
    console.log(N2);
    console.log(Sum);

    for(let i=3;i<=number;i++){
        N1=N2;
        N2=Sum;
        Sum=N1+N2;
        console.log(Sum);
    }
}

console.log(FibonacciSequence(number))