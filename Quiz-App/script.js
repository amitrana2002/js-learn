const quizdata=[
    {
        Question:"Who is the Prime Minister of India",
        a:"Narender Modi",
        b:"Yogi Adityanath",
        c:"Rahul Gandhi",
        d:"Mamta Banerjee",
        correct:"a",
    },
    {         
        Question: "Who is the President of the United States?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Kamala Harris",
        d: "Barack Obama",
        correct: "a",
    },
    {
        Question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "Japan",
        c: "South Korea",
        d: "Thailand",
        correct: "b",
    },
    {
        Question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Brisbane",
        correct: "c",
    },
    {
        Question: "Who wrote the play 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
        correct: "b",
    },
    {
        Question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b",
    }
]

const quiz = document.getElementById("quiz");
const answerels=document.querySelectorAll('.answer');
const questionel =document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn =  document.getElementById("submitBtn");
let currentQuest=0;
let answer=undefined;//false
let score =0;
loadquiz();

function loadquiz()
{
    deselectanswers();
    const currentData=quizdata[currentQuest];

    questionel.innerText=currentData.Question;
    a_text.innerText=currentData.a;
    b_text.innerText=currentData.b;
    c_text.innerText=currentData.c;
    d_text.innerText=currentData.d;
}

function getSelected()
{
    let answer=undefined;
    answerels.forEach((answerEl)=>{
        if(answerEl.checked)
        {
            answer=answerEl.id;
        }
    });

    return answer;
}

function deselectanswers(){
    answerels.forEach((answer)=>{
        answer.checked=false;
    });
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();
    if(answer )
    {
        if(answer===quizdata[currentQuest].correct)
        {
            score++;
        }
        currentQuest++;
        if(currentQuest<quizdata.length)
        {
            loadquiz();
        }
        else
        {
            quiz.innerHTML = `<h2 style="padding:25px;">You answered correctly at ${score}/${quizdata.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }

    
   
})