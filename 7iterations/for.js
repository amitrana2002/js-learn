//For Loop
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//nested loop
for(let i=1;i<=5;i++)
{   
    console.log();
    console.log("Table of "+ i);
        for(let j=1;j<=10;j++)
        {
            console.log(i+"*"+j+"="+(i*j));
        }
}

//continue
for(let i=1;i<=10;i++)
{
    if(i%2==1)
    {
        continue; //it will skip odd values
    }
    console.log(i);
}

