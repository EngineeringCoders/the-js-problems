//Write a program to find nth fibonacci number, where n is the index of the given series;
//Definition:
/**
 *  In case of fibonacci series, next number is the sum of previous two numbers for example 0, 1, 1, 2, 3, 5, 8, 13, 21 etc. The first two numbers of fibonacci series are 0 and 1.

    There are two ways to write the fibonacci series program:

    Fibonacci Series without recursion
    Fibonacci Series using recursion
 */

// without Using recusrsion
const fibonacciNumber = (num)=>{
    let fiboSeries = [0,1,1,2,3,5,8];
    if(num <=2 ) return 1;
    for(let i = 2; i<=num; i++){
        fiboSeries[i] = fiboSeries[i-1] + fiboSeries[i-2];
    }
    return fiboSeries[num];
}

let inputValue = 12
const result = fibonacciNumber(inputValue);
console.log(`The fibonacci number for ${inputValue}:`,result);

// write execption handling for the above problem
//write the same program using recursive function in order to increase the efficiency
//as the time complexity of the current solution is O(n).
