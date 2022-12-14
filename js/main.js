const quizQuestion = document.querySelector('.question'),
opt = document.querySelectorAll('ul li'),
btn = document.querySelector('button'),
rbtn = document.querySelectorAll('ul li input'),
stats = document.querySelector('.status');

let answer, correctAnswer;

function setQuestion(){
    let randIndex = Math.floor(Math.random() * questionList.length);
    quizQuestion.innerText = questionList[randIndex].question;
    correctAnswer = questionList[randIndex].correct;
    for(let i = 0; i < 4; i++){
        opt[i].lastChild.innerText = questionList[randIndex][(i+1)];
    }
    answer = questionList[randIndex][1];
}

setQuestion();

rbtn.forEach((e) => {
    e.addEventListener('click', () => {
        answer = e.parentElement.lastChild.innerText;
        stats.classList.remove('active');
    });
});

btn.addEventListener('click', () => {
    if (answer === correctAnswer){
        setQuestion();
    }

    else {
        stats.classList.add('active');
    }
});

