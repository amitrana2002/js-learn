//Dates are calculated from 1 Januar 1970
//calculated in milliseconds
 
//Temporal Api is proposed nowadays for date and time in javascript -> not usable till now

let date = new Date();//Date is Object
console.log(date);// in numeric format

console.log(date.toString()); // in readable format
console.log(date.toDateString());// only date no time
console.log(date.toLocaleString());// readable format
console.log(date.toISOString()); // in numeric
console.log(date.toJSON());

//creating own date
let createdata= new Date(2023,9,29);// YY MM DD and 0 as Jan   
console.log(createdata.toString());
console.log(createdata.getDate());
console.log(createdata.getMonth());
console.log(createdata.getFullYear())


//Timestamps 
let timestamp = Date.now();
console.log(timestamp); // in milliseconds from 1970
