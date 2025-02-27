//1. The reduce() method does not change the original array.
//2. The reduce() method returns a single value: the function's accumulated result.
//3. The reduce() method executes a reducer function for array element.
//4. The reduce() method does not execute the function for empty array elements.
//NOTE: reducer() is more than this. Check from Internet: mdn
//syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//E.g:1
const numbers4 = [8, 12, 40, 100];
const reduceCheck = numbers4.reduce((total, num, index, arr)=>{  //not work with object.
    console.log(total, num, index, arr);
    return total+num;
},0);
// console.log(reduceCheck);

//E.g-2
const array1 = [1, 2, 3, 4];
let expenses = [
    {description: "Groceries", amount:50, category: "Food"},
    {description: "Electricity Bill", amount:100, category: "Utilities"},
    {description: "Dinner", amount:30, category: "Food"},
    {description: "Internet Bill", amount:50, category: "Utilities"}
]

const initialValue = 0;
const undestandReduce = expenses.reduce((accumulator, currValue)=>{
    // console.log(accumulator, "@", currValue.amount);
    return "hemant"
},[1,2,3,4]);
// console.log(undestandReduce);

//challenge-1: fint the most active user using reduce. Return: that object
let userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 75},
    {user: "Martha", activityCount: 33},
    {user: "Jonas", activityCount: 89},
    {user: "Zatch", activityCount: 22},
];

const mostActive = userActivity.reduce((acc, currUser)=>{  
    if(currUser.activityCount>acc.activityCount){
        return currUser;
    }  
    return acc;
})
// console.log(mostActive);