//Filter Array: Implement a function that filters out elements from an array based on a given condition.

let ages = [11,15,16,22,35,46]

/*First Method*/

function filterArray(ages){

    return ages>=18;
}

console.log(ages.filter(filterArray));