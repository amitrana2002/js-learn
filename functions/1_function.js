
//simple function
function myname(){
    console.log("Amit Rana");
}
myname();


// function with argument
function addnum(a,b)
{
    console.log(a+b);
}
addnum(5,4); // if no argument then function will print NaN

// addnum(5,"4"); // it will return 54

// addnum(3,"a")//3a

//const ans =addnum(25,24); //49 will print here
//console.log(ans); // it will undefined because in function we are not returning anything we are printing


//returning value from a function
function mult(a,b)
{
    return a*b;
}
const result = mult(5,6);
console.log(result);


//function with passing string
function loginUser(username="User") //setting default value
{
    if(username)
    return `${username} just logged in`;
    else
    return "Please Enter a Username";
}

const res = loginUser("Anshul");
console.log(res);

const res2 = loginUser();
console.log(res2);