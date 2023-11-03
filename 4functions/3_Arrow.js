//this -> to refer to current context 

const user={
    username : "Amit Rana",
    price : 5100,

    welcomemsg: function()
    {
        console.log(`${this.username} , welcome to CU`);
        console.log(this); //will print what current values are in object
    }
}

// user.welcomemsg();
// user.username="Sachin Sharma";//changing the variable in username
// user.welcomemsg();

// console.log(this); // op -> {} due to node environment



// function chai(){
//     let name = "Amit";
//     console.log(this.name);// will print undefined bcs we can't use this inside function directly
// }
// chai(); 


//Arrow Functions in Javascript
// const func = ()=>{  // only difference is function ko hta kr jaha arguement lete hn uske aage => lgo do
//     let name = "Amit";
//     console.log(this.name);
// }
// func();

//Question : what is difference between function and arrow function

//ex. of arrow function

const add=(a,b)=>{//explicit return ->we use return keyword
    return a+b;
}
console.log(add(4,5));

// implicit return -> we do not use parenthesis and return in implicit return
const add3 =(c,d,e)=> (c+d+e); // => c+d+e is also correct
console.log(add3(5,6,7));


const userid = ()=>({name: "amit" , uid : "20BCS1988"});
console.log(userid());