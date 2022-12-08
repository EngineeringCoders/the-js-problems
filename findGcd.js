//Find the greatest common divisor of two number?
/**
 * Description:
 * The greatest common divisor (GCD) of two or more numbers is 
 * the greatest common factor number that divides them, exactly. 
 * It is also called the highest common factor (HCF). For example, 
 * the greatest common factor of 15 and 10 is 5, since both the numbers 
 * can be divided by 5.
 */
//method-1
// function gcd(a,b){
//     let divisor = 2;
//     let greatestDivisor = 1;
//     //check for negative number as an input
//     if(a<2 || b < 2) return 1;
//     while(a>=divisor && b>=divisor){
//         if(a % divisor == 0 && b % divisor == 0){
//             greatestDivisor = divisor;
//         }
//         divisor++
//     }
//     return greatestDivisor;

// }

//method-2 by susing recursive function
const gcd = (a,b) =>{
    //recursion break condition
    if(b == 0)
        return a;
    else
        return gcd(b,a%b);
}

const num1 = 108;
const num2 = 12;
const result = gcd(num1,num2)
console.log(`The gcd of ${num1} & ${num2} is :`,result);