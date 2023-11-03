function calculatePrice(...num1) // rest operator or spread operator
{
    return num1;
}
console.log(calculatePrice(200,400,600,800));


//passing object in function
const user={
    name:"Amit Rana",
    UID : "20BCS1988"
}
function handleUser(anyobject)
{
    console.log(`Username is ${anyobject.name} And UserID is ${anyobject.UID}`);
}
// handleUser(user);
handleUser({
    name:"Amit Rana",
    UID:"20BCS1988"
})


//passing array to a function
const arr = [10,20,30,40];

function handlearr(getArr)
{
    return getArr[0];
}
//console.log(handlearr(arr));
console.log(handlearr([10,20,30,40]));