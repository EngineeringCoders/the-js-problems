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