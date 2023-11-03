let score="99";
console.log(typeof(score));

let scoreinNum = Number(score);

console.log(typeof(scoreinNum));

let uid="20BCS";
let uidinNum = Number(uid);
console.log(uidinNum); //NaN bcs conversion is not of a pure number
console.log(typeof uidinNum); // but it converted it into number

/*
    string to Number
 "1988" = 1988;
 "20bcs" =NaN;
 true = 1;
 false=0;

    number to Boolean
    1 -> True;
    2 -> False;

    string to Boolean
    "" ->False
    "Amit" ->True
  */