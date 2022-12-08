//Write a program to remove duplicate members from an array?
/**
 * comparison
 */

const removeDuplicate = (arr)=>{
    let exists ={},
        outArr = [],
        elm;
    for(let i = 0; i<arr.length;i++){
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm] =true;
        }
    }
    return outArr;
}

const testArr = [1,2,55,2,3,4,1,4,1,55,4,5,9,8,7,6,2,55,4,2];
console.log("The array with unique values are: ",removeDuplicate(testArr));