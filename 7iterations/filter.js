//filter -> filter me hm return kr skte hn with a condition

const nums=[1,2,3,4,5,6,7,8,9,10];

const newnums = nums.filter((num)=>{
        if(num<4)
        {
            return num;
        }
})

console.log(newnums);

// if we had same thing with foreach then we had to create a new array
const n2=[];
nums.forEach((num)=>{
    if(num<4)
    {
        n2.push(num);
    }
})
console.log(n2);


//exercise with filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks=books.filter((bk)=>{  //(bk)=> bk.genre =="History"
    if(bk.genre=="History")
    {
        return bk;
    }
  })

  console.log(userBooks);
  /*
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */
 

const userBooks2=books.filter((bk)=> {
    return bk.edition>2004
});
console.log(userBooks2);
/*
[
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/


// add 10 in every number
const mynums = [1,2,3,4,5,6,7,8,9,10];
const newn=mynums.map((num)=> num+10);
console.log(newn);
/**
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
 */