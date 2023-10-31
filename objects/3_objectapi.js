//Object De-structure
/*Object destructuring in JavaScript is a syntax that allows you to extract values from an 
object and assign them to variables. This can be done in a single statement, which can make
your code more concise and readable.*/


const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };

const { name, age, city:add} = person;

//no need to write person.name, person.age , person.city etc only direct name, age, city
console.log(name); // John Doe
console.log(age); // 30
// console.log(city); 
console.log(add);// New York  city is renamed as address




