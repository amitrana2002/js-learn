//closure -> function k andr vale functions bahr vale function me declared variable ko access kr skte hn

function one(){
    name = "Amit Rana";

    function two(){
        const subject = "Javascript";
        console.log(name);
    }
    // console.log(subject);

    two();
}

one();


// declaring functions in different ways

console.log(addnum(50));
function addnum(a)
{
    return a+1;
}


const addtwo = function (b)
{
    return b+2;
}
console.log(addtwo(5));