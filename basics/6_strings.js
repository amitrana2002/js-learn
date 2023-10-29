const name="Amit";
const uid="20BCS1988";

console.log("Hello My name is "+ name + " And my uid is " + uid); // old syntax
console.log(`Hello my name is ${name} And my uid is ${uid}`); //new syntax  - preferable

const college = new String('Chandigarh University'); // create an object of string
console.log(college);
console.log(college[2]);

console.log(college.length); // return length of string
console.log(college[2].toUpperCase());
console.log(college.endsWith('y'));//true if ends with y else false
console.log(college.indexOf('n'));// will return the first n index
console.log(college.charAt(5));

//slice
const newstr=college.slice(0,12);//0 include 12 exclude i.e will print from 0 to 11
console.log(newstr);

const revstr = college.slice(0,-5); // doubt
console.log(revstr);

//trim
const sp="   Amit Rana             ";
console.log(sp);
console.log(sp.trim());// it will remove spaces from front and back not from middle

//replace
const url="https://organic%spacejourney.dev/"
console.log(url.replace('%','-')); // replace % with -   // will not replace all but first one

