//check if a given number is a prime number 
//Example : input = 3
//Ouput: 3, is a prime number
//Example-2 : input = 4 
//Output: 4 is not a prime number
//Define the problem: 
// A prime number is only divisible by itself and 1.
//prime number test
const isPrime = (num) =>{
    //check if the number is prime or not
    let divisor = 2;
    while(num>divisor){
        //checking if the given number is completly divisible by the divisors 
        if(num % divisor == 0){
            return false;
        }else{
            divisor++
        }
        return true;
    }
}

let testNumber = 154
const result = isPrime(testNumber);
console.log(`Is the ${testNumber} is prime numer?  `,result);