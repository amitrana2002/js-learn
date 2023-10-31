//Creating an object

const obj1= new Object(); //singleton

const obj2 = {};//non singleton

// console.log(obj1);  //{}             // same output for both
// console.log(obj2); //{}

obj1.Name="amit";
obj1.Id = 201988;
obj1.Address = "Zakir B";
// console.log(obj1); 
//{ Name: 'amit', Id: 201988, Address: 'Zakir B' }


//object in object
const obj3 = {
        Student : "Amit Rana",
        Suid : 1988,

        college:{
            Cname : "CU",
            CAddress : "Gharuan"
        }
}

//console.log(obj3);
// console.log(obj3.college);
// console.log(obj3.college.Cname);  //CU


//Merging two objects
const obj4 = {1:'a' , 2:'b',3:'c'};
const obj5 = {4:'d', 5:'e' , 6 : 'f'};

const obj6 = {obj4,obj5}; //it will not merge but will put two arrays under obj6
// console.log(obj6);

//right ways to merge two arrays
const obj8 = {...obj4,...obj5} 
// console.log(obj8); // op: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj7 = Object.assign({},obj4,obj5);
// console.log(obj7);// op: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//taking keys and values from an object
console.log(Object.keys(obj7)); // will give all keys of object in form of  an array
console.log(Object.values(obj7)); // will give all values of object in form of an array
console.log(Object.entries(obj7)); //give key value pairs in arrays under arrays

// to check a particular property or key is in object or not
console.log(obj7.hasOwnProperty(1));//true