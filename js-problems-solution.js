<<<<<<< HEAD
const list = [4, 6, 9, 11, 21, 34, 57, 89, 36, 80, 25, 78, 17, 46, 30];

function even_sum(list) {
  let sum_of_evens = null;
  //write your logic & store into sum_of_evens variable

  for (let index = 0; index < list.length; index++) {
    if (list[index] % 2 === 0) {
    //   console.log(list[index]);
      sum_of_evens = sum_of_evens + list[index];
    }
  }

  return sum_of_evens;
}

console.log("Sum of Even nos:-", even_sum(list));
=======
// Write js program to add all the even items of list given below and log the output.

const list = [4,6,9,11,21,34,57,89,36,80,25,78,17,46,30,1,2]

const sum_even = (num) => {
    let sum = 0
    num.map(a => {
        if(a%2===0) sum+=a
    })
    console.log(sum)
}
sum_even(list)
>>>>>>> c0144dc8abc1f44e4d1a27bbfdee9d05cf3bdc77
