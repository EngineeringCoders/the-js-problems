//What is array?
//why array -> to store data
//variable -> named space in out computer system used to store some data
//write a program to find the average marks of 11 students
//Marks of each student out of 100 is given below 
/**
 * Student-1 = 66
 * Studdent-2 = 45
 * Studdent-3 = 34
 * Studdent-4 = 88
 * Studdent-5 = 78
 * Studdent-6 = 36
 * Studdent-7 = 90
 * Studdent-8 = 93
 * Studdent-9 = 58
 * Studdent-10 = 60
 * Studdent-11 =20
 */

/**
 * Find Maximum in Sliding Window
 * Problem Explaination:
 *  We have an integer array and a window of size w, find the current maximum value
 *  in the window as it slides through the entire array
 * Example:
 *  let's have an array ie demoArr
 *      let demoArr = [-4,2,-5,3,6], we will be using a window size of 3
 *      So in above array for the first 3 elements in the window, max is 2
 * Sample Input: 
 *      nums = [1,2,3,4,5,6,7,8,9,10]
 *      window_size = 3;
 *      Expected Output: [3,4,5,6,7,8,9,10]
 */
//1. create a function
let findMaxSlidingWindow = (numArr,windowSize)=>{
    let result = [];

    //returns empty list/array
    if(numArr.length == 0){
        return result;
    }
    //if window size is greater than the array size,
    //set the window_size to numArr.size()
    if(windowSize > numArr.length){
        windowSize = numArr.length;
    }

    //Iniitializing doubly ended queue for storing indices using array
    let window = [];

    //find out max, for the first window
    for(let i = 0; i<windowSize;i++){
        //For every element, remove the previous smaller element from the window
        while(window.length > 0 && numArr[i] >= numArr[window[window.length - 1]]){
            window.pop();
        }
        //Remove first index fromm the window deque if it doesn't fall in the current 
        //window anymore
        if(window.length>0 && (window[0] <= i-windowSize)){
            window.shift();
        }
        //Add current element at the back of the queue
        window.push(i);
        //Appending the largest elmenet in the window to the result
        result.push(numArr[window[0]]);
    }
    return result;
}

let targetList = [3,2,1,2];
let numList = [[1,2,3,4,5,6,7,8,9,10],[10,6,9,-3,23,-1,34,56,67,-1,-4,-8,-2,9,34,67],[4,5,6,1,2,3],[9,5,3,1,6,3]];
for(let i = 0;i<numList.length ; i++){
    console.log((i+1) ,"Original list: ", (numList[i]));
    console.log("Window size : ",targetList[i]);
    console.log("Max: :: ",(findMaxSlidingWindow(numList[i],targetList[i])));
}