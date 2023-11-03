const arr = ["Amit","Rana","Karnal","Haryana"];
console.log(arr);
console.log(arr[0]);

//Arrays methods
arr.push("CU");//adding new element at last
console.log(arr);

arr.pop();//remove last element
console.log(arr);

//shift unshift
arr.unshift('First'); // it will add new element ar first
console.log(arr);

arr.shift();//it will remove first element
console.log(arr);

//includes
console.log(arr.includes("Rana"));//check string exist in array or not

//join
const arrstring = arr.join();// will convert the array into string type
console.log(arrstring);
console.log(typeof arrstring);

//slice , splice
const arr1 = arr.slice(1,3); // will include 1 ,2 but not 3
console.log(arr1);
console.log("After Slice",arr); //slice can't manipulate original array

const arr3 = arr.splice(1,3);//splice will manipulate the original array and remove that part from original array
console.log(arr3); // splice include 1,2,3
console.log("After Splice",arr);
