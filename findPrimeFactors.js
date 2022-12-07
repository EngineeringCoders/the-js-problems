//Find all the prime factors of a given number
//Defination: 
/**
 * Prime factor is the factor of the given number which is a prime number. 
 * Factors are the numbers you multiply together to get another number. 
 * In simple words, prime factor is finding which prime numbers multiply together 
 * to make the original number.
 */

const primeFactors = (num) =>{
    let factors = [];
    let divisor = 2;
    while(num>2){
        if(num % divisor == 0){
            factors.push(divisor);
            //now we divide completly the input number with the current divisor and 
            //store the quotient into the same variable
            num = num / divisor;
        }else{
            divisor++;
        }
    }
    return factors;
}

const inputValue = 2;
const result = primeFactors(inputValue);
console.log(`The prime factors of ${inputValue} are :`,result);

//What is the run time complexity for this question ?
