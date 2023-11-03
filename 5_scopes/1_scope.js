{
    let a=5;
    const b=6;
    var c=7;
}

//console.log(a); // give error bcs of block scope
//console.log(b); // will give error bcs of block scope
console.log(c);

let d=5;
{
    let d=10;
    console.log("block scope value is "+d);
}
console.log (`Global scope value is ${d}`);// use bactics or " "+d 


