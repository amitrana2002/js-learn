// IIFE -> Immediately Invoked Function Expression ->global scope k pollution ko htane k lie iife ka use krte hn

(function night(){ //named iife
    console.log("Today is 4th November");
})();
 // first function if for definition and second function is for execution


(()=>{ //unnamed iife
    console.log("Database Connected");
})();

((data)=>{
    console.log(`Database Connected ${data}`);
})("Oracle")