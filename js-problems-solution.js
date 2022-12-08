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