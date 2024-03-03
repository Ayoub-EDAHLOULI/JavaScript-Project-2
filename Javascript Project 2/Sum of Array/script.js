//Sum of Array: Create a function that calculates the sum of all elements in an array.

let arrayNumber=[1,2,3,4,5]
let Sum = 0;

function SumofArray(){
    for(let i=0;i<arrayNumber.length;i++){
        Sum+=arrayNumber[i]
    }
    return Sum
}

console.log(SumofArray())