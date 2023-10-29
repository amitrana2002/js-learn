const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)// will push arr2 in arr1

console.log(marvel_heros);//print arr2

console.log(marvel_heros[3][1]);//3rd no. pr arrayh h and then uske andr ka 1st

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//return new array containing both arrays


const all_new_heros = [...marvel_heros, ...dc_heros]//same as concat but we can add many arrays like that

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//convert into simple one array containing all elements
console.log(real_another_array);



console.log(Array.isArray("AmitRana"))//check it is array or not
console.log(Array.from("Amit"))//convert into array
console.log(Array.from({name: "AmitRana"})) // interesting empty[] array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//variables into arrays 