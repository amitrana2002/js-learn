const fetch = require('node-fetch')
// const promiseOne = new Promise(function(resolve,reject){
//     //do an async task
//     setTimeout(function(){
//         console.log("Async Task is Complete");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// //without storing in any variable
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("Task 2 completed");
// })

// //Promise 3-> passing data through resolve()
// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Task Completed")
//         resolve({userName:"Amit Rana",email:"20BCS1988@cuchd.in"})
//     },1000);
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// //Promise 4 ->using reject for catching error
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error=false;
//         if(!error)
//         {
//             console.log("Task 4 Completed")
//             resolve({username:"Amit Rana ",email:"20BCS1988@cuchd.in"})
//         }
//         else
//         {
//             reject('ERROR: Something Went Wrong')
//         }
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
// }).catch((error)=>{
//     console.log(error)
// })

// //promisefive-> then chaining to supply the data from one then to another then
// const promisefive = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=false;
//         if(!error)
//         {
//             console.log("Task 5 completed")
//             resolve({username:"Amit Rana ",email:"20BCS1988@cuchd.in"})
//         }
//         else
//         {
//             reject('ERROR: Something Went Wrong for Task 5')
//         }
//     }, 1000);
// })

// promisefive
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>
// {
//     console.log(error)
// })
// .finally(()=>{ // it will always run after end of promise whether reject or resolve
//     console.log("This is the Final Statement")
// })


// //promiseSix->using async await ->we have to use try and catch in place of then and catch

// const promiseSix = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=false;
//         if(!error)
//         {
//             console.log("Task 6 completed")
//             resolve({username:"Amit Rana ",email:"20BCS1988@cuchd.in"})
//         }
//         else
//         {
//             reject('ERROR: Something Went Wrong for Task 6')
//         }
//     }, 1000);
// })

// async function consumePromisesix(){
//     try
//     {
//         const response = await promiseSix;
//         console.log(response);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// consumePromisesix();


//fetching data from api using async await

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

//fetch with then-catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all