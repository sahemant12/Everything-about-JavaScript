//1. The filter() method does not change the original array. 
//2. The filter() method does not execute the function for empty elements.  
//3. The filter() method creates a new array filled with elements that pass a test provided by a function.

const numbers2 = [65, 12, 40, 100];
const filterCheck = numbers2.filter((num, index, arr)=>{  //not work with object.
    // console.log(num, index, arr);
    // return num>12;
    if(num>12){
        return arr;
    }
})
// console.log(filterCheck);