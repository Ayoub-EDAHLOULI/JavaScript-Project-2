//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.


let arrayNumber=[5,2,18,16,255,10,-2];
let Max=arrayNumber[0];
let Min=arrayNumber[0];
let min = Math.min.apply(null, arrayNumber)
let max = Math.max.apply(null, arrayNumber)


/* First Method */

function MaxMin(){
    return "The Maximum is : " + max + " The Minimum is : " + min
}


/* Second Method */

function MaxMin(){
    for(let i=0;i<arrayNumber.length;i++){
        if(arrayNumber[i]>Max){
            Max=arrayNumber[i]
        }
        if(arrayNumber[i]<Min){
            Min=arrayNumber[i]
        }
    }
    return "The Maximum is : " + Max + " The Minimum is : " + Min
}

console.log(MaxMin(arrayNumber))