//reduce->

const nums=[1,2,3,4,5,6];
const initial=0;

const total = nums.reduce(function (acc,currval){
    // console.log(`acc:${acc} + currval:${currval} => total : ${acc+currval}`);
    return acc+currval
},initial)
/* op :->
acc:0 + currval:1 => total : 1
acc:1 + currval:2 => total : 3
acc:3 + currval:3 => total : 6
acc:6 + currval:4 => total : 10
acc:10 + currval:5 => total : 15
acc:15 + currval:6 => total : 21
*/
// console.log(total); //21


//using arrow function
const total2=nums.reduce((acc,currval)=>(acc+currval),0);
console.log(total2);

const shopping =
[
    {
        Item :"Mouse",
        Price : 2000,
        Category : "electronic"
    },
    {
        Item :"Keyboard",
        Price : 3999,
        Category : "electronic"
    },
    {
        Item :"PubG",
        Price : 5000,
        Category : "Software"
    },
]

//add all prices of shopping
const totalprice= shopping.reduce((acc,item)=>(acc+item.Price),0)
console.log(`The Total Shopping Price is ${totalprice}`);