/*Lecture  # 1:
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)*/

const UniversityID= 201988;
let Name = "Amit Rana";
var Password="123456";
Address = "Mohali";

//UniversityID = 201987 //not allowed
Name="Amit Kumar";
Password = "98765";
Address= "Gharuan";

console.log([UniversityID,Name,Password,Address]);
console.table([UniversityID,Name,Password,Address]);

const ab = "must be initilized";
let bc;
var xy;

console.table([ab,bc,xy]);
