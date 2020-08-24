var time = document.getElementById('timer');
var startBtn = document.getElementById('begin()');
var s = 0;
s++;
//questions
var q = [
    "Commonly used data types DO Not Include:<br /><br />",
    "The condition in an if/else statement is enclosed with ______.<br /><br />",
    "Arrays in JavaScript can be used to store _______. <br /><br />",    
    "String values must be enclosed within ________ when being assigned to variables.<br /><br />"
];
// options 1-4
var a1 = [
    "<button class = button2 onclick = q1i()>strings</button",
    "<button class = button2 onclick = q2i()>quotes</button",
    "<button class = button2 onclick = q3i()>numbers and strings</button",
    "<button class = button2 onclick = q4i()>commas</button"
];

var a2 =[
    "<button class = button2 onclick = q1i()>booleans</button",
    "<button class = button2 onclick = q2i()>curly brackets</button",
    "<button class = button2 onclick = q3i()>other arrays</button",
    "<button class = button2 onclick = q4i()>curly brackets</button"
];

var a3 =[
    "<button class = button2 onclick = q1c()>alerts</button",
    "<button class = button2 onclick = q2c()>parenthesis</button",
    "<button class = button2 onclick = q3i()>booleans</button",
    "<button class = button2 onclick = q4c()>quotes</button"
];

var a4 =[
    "<button class = button2 onclick = q1i()>numbers</button",
    "<button class = button2 onclick = q2i()>square brackets</button",
    "<button class = button2 onclick = q3c()>all of the above</button",
    "<button class = button2 onclick = q4i()>parenthesis</button"

];

var c = "Correct"
var i = "Incorrect"
var message2 = "End of Quiz"
var t;

//functions for question 1
function begin() {
    t=120;
    disappear.innerHTML= "";
    message1.innerHTML= "";
    question.innerHTML= q[0];
    option1.innerHTML= a1[0];
    option2.innerHTML= a2[0];
    option3.innerHTML= a3[0];
    option4.innerHTML= a4[0];
    number.innerHTML= 1;
    //timer();
    
}

function q1c() {
    answer.innerHTML = "<div id = green>" + c + "</div>";
    question.innerHTML= "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML= "<button class = button1 onclick = nextq2()>Next</button>";
    score.innerHTML = s++;
}

function q1i() {
    answer.innerHTML = "<div id = red>" + i + "</div>";
    question.innerHTML= "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML= "<button class = button1 onclick = nextq2()>Next</button>";
    
}
//functions for question 2
function nextq2() {
    question.innerHTML= q[1];
    option1.innerHTML= a1[1];
    option2.innerHTML= a2[1];
    option3.innerHTML= a3[1];
    option4.innerHTML= a4[1];
    next.innerHTML="";
    answer.innerHTML="";
    number.innerHTML= 2;
}
function q2c() {
    answer.innerHTML = "<div id = green>" + c + "</div>";
    question.innerHTML= "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML= "<button class = button1 onclick = nextq3()>Next</button>";
    score.innerHTML = s++;
}

function q2i() {
    answer.innerHTML = "<div id = red>" + i + "</div>";
    question.innerHTML= "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML= "<button class = button1 onclick = nextq3()>Next</button>";
    score.innerHTML = s--;
}

//functions for question 3
function nextq3(){
question.innerHTML= q[2];
    option1.innerHTML= a1[2];
    option2.innerHTML= a2[2];
    option3.innerHTML= a3[2];
    option4.innerHTML= a4[2];
    next.innerHTML="";
    answer.innerHTML="";
    number.innerHTML= 3;
}
function q3c() {
    answer.innerHTML = "<div id = green>" + c + "</div>";
    question.innerHTML= "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML= "<button class = button1 onclick = nextq4()>Next</button>";
    score.innerHTML = s++;
}

function q3i() {
    answer.innerHTML = "<div id = red>" + i + "</div>";
    question.innerHTML= "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next.innerHTML= "<button class = button1 onclick = nextq4()>Next</button>";
    score.innerHTML = s--;
}

// functions for question 4
function nextq4(){
    question.innerHTML= q[3];
        option1.innerHTML= a1[3];
        option2.innerHTML= a2[3];
        option3.innerHTML= a3[3];
        option4.innerHTML= a4[3];
        next.innerHTML="";
        answer.innerHTML="";
        number.innerHTML= 4;
    }
    function q4c() {
        answer.innerHTML = "<div id = green>" + c + "</div>";
        question.innerHTML= "";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        option4.innerHTML = "";
        debugger
        next.innerHTML= "<button class = button1 onclick = results()>End of Quiz</button>";
        score.innerHTML = s++;
    }
    
    function q4i() {
        answer.innerHTML = "<div id = red>" + i + "</div>";
        question.innerHTML= "";
        option1.innerHTML = "";
        option2.innerHTML = "";
        option3.innerHTML = "";
        option4.innerHTML = "";
            debugger;
        next.innerHTML= "<button class = button1 onclick = results()>End of Quiz</button>";
        score.innerHTML = s--;
    }

    function results() {
        
        window.clearInterval(update);
        t="-";
        message1.innerHTML="End Of Quiz"
        disappear.innerHTML= "";
    question.innerHTML= "";
    option1.innerHTML= "";
    option2.innerHTML= "";
    option3.innerHTML= "";
    option4.innerHTML= "";
    number.innerHTML= "";
    score.display();
   
    }


function saveScore() {
    localStorage.setItem("score",JSON.stringify(s))
}


    function timer(){
        t = t-1;
        if (t < 100){
            time.innerHTML = t;
        }
        if (t < 1){
        window.clearInterval(update);
        message1.innerHTML= "Time's up!";
        question.innerHTML= "";
    option1.innerHTML= "";
    option2.innerHTML= "";
    option3.innerHTML= "";
    option4.innerHTML= "";
    number.innerHTML= "";
        }
    }
    update = setInterval("timer()",1000)