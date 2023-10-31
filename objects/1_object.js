//singleton -> when me make object using constructor but in literals not singleton

//object literal
//Object.create();
const JUser ={
    name :"Amit",  //name is key Amit is Value
    age:21,
    email : "AmitRana@gmail.com",
    WorkDays: ["Monday","Tuesday"],
    isLogin : true 
}; 

console.log(JUser.name); //not a good practice
console.log(JUser["name"]);//good practice
console.log(JUser["isLogin"]);

//Symbol in object

const MySym = Symbol("Key1");
const JUser2 ={
    name :"Amit",  //name is key Amit is Value
    age:21,
    email : "AmitRana@gmail.com",
    WorkDays: ["Monday","Tuesday"],
    isLogin : true ,
    [MySym] : "myKey1",        //brackets are important
}; 

console.log(JUser2[MySym]);

//Changing object members
JUser2.age=22;
JUser2.isLogin=false;
console.log(JUser2["age"]);

//to freeze changes
Object.freeze(JUser2); // we cant change object members after that , if we change there will no error but will not be changed

JUser2.age=23;
console.log(JUser2["age"]); //it will give 22 only


//working on JsUser bcs we have freezed JsUser2

//function in object
JUser.greet = function(){
    console.log("Hello Amit Rana")
}

console.log(JUser.greet());