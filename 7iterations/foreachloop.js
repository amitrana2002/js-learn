
//forEach -> loop k andr function daal denge
//foreach me hm return nhi kr skte hn bs print krenge
const coding =["C++","Java","Python","Ruby","Rails","Javascript","Scala"];

coding.forEach(function(item){
        // console.log(item);
})

coding.forEach((item)=>{
    // console.log(`Language is ${item}`);
})

//we can also pass functions
function passme(item){
    // console.log(item);
}
coding.forEach(passme);


//foreach me values k sath sath index and complete array b aata h
coding.forEach((item,index,coding)=>{
    // console.log(item,index,coding);
})


//array of objects ->very important
const details=[
    {
        name :"Amit",
        UID : "20BCS1988",
        Section:"35"
    },
    {
        name :"Sachin",
        UID : "20BCS2743",
        Section:"36"
    },
    {
        name :"Anshul",
        UID : "20BCS7805",
        Section:"37"
    },
    {
        name :"Sayan",
        UID : "20BCS2299",
        Section:"37"
    }
]

details.forEach((item)=>{
    console.log(item.name);
})