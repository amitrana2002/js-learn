
// array of objects -> [ {} , {} , {} ]

// for of -> arrays,maps
// for in -> arrays,objects


const arr=[1,2,3,4,5,6];

for(const it of arr)
{
    // console.log(it);
}

const str = ["Amit","Rana","Mohali","Punjab"];
for(const it of str)
{
    // console.log(it);
}

//loop on string
const name ="Amit Rana";
for(const ch of name)
{
    if(ch==" ")
    {
        continue;
    }
    // console.log(ch);
}

//Maps in Javascript
const map = new Map();
map.set('CU',"Chandigarh University");
map.set('PNB',"Punjab");
map.set('HR',"Haryana");
map.set('UP',"Uttar Pardesh");
// console.log(map);

for(const [key,value] of map)
{
    // console.log(key,'->',value);
}


//For on loop on Object -> 
const obj ={
    'game1':'NFS',
    'game2':'GTYCT',
    'game3':'PUBG'
}

for(const key in obj) // for objects it loop is for in
{
    // console.log(key);//printing keys
}

for(const key in obj)
{
    // console.log(`${key} shortcut is for ${obj[key]}`);
}


//for on loops on arrays
const arr2=["My","name","is","Amit"];
for(const key in arr2)
{
    console.log(arr2[key]);
}
