
//falsy values->jinko false assume kia jata h ->  false , 0,-0,BigInt 0n , null ,undefined, NaN , 
//truthy values-> "0" , "false" , " "(space) , function(){} 

//if the variable have values then it is always truth during if condition 

const useremail = "AmitRana@gmail.com";

if(useremail)
{
    console.log("User have email");
}
else
{
    console.log("No Email");
}


//how to check object is empty or not

const obj={};

if(Object.keys(obj).length===0)
{
    console.log("Object is Empty");
}


//Nullish Coalescing Operator (??) : null , undefined 
let val1;
val1= 5??10;

console.log(5);

//Ternery operator
// condition ? true:false;

const icePrice = 60;

icePrice>=60 ? console.log("More than or 60") : console.log("Less Than 60");