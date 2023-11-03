const score=100;
console.log(score);

const balance = new Number(100.566); //as an object so that we can use different prototypes like length toString toPrecision etc.
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precision limit

const num2= 124.5677745;
console.log(num2.toPrecision(3)); //round of to 3

const num3= 1124.5677745;//will be shown in exponential round of
console.log(num3.toPrecision(3)); //round of to 3

const num4=1250000;
console.log(num4.toLocaleString()); // default comma according to US standard

console.log(num4.toLocaleString('en-IN')); //comma according to Indian Standard

Number.MAX_VALUE;
Number.MIN_VALUE;


//*******************Maths******************** */
console.log(Math);


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // for between 10 and 20