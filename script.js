const questions = [
    {
        question: "Витаминка это???",
        answers: ["Жасмина", "Препарат", "Сладость", "Арбуз"],
        correct: 0
    },
    {
        question: "Кто всегда знает, как поднять настроение?",
        answers: ["Джим Керри", "Жасмина", "Маша и медведь", "Рахматулла"],
        correct: 1
    },
    {
        question: "Кто Кутлугбеку не сделал все еще плов?",
        answers: ["Его мама", "Его Бабушка", "Он сам", "Жасмина"],
        correct: 3
    },
    {
        question: "Кто может создавать интересные проблемы бесконечно?",
        answers: ["Робот", "Анимешник", "Жасмина", "Креативность тугаб колди узр"],
        correct: 2
    },
    {
        question: "Кто обладает самой заразительной улыбкой?",
        answers: ["Дархан", "Сарвиназ", "Алекс Перейра", "Жасмина"],
        correct: 3
    }
];

let currentQuestion = 0;
let container = document.querySelector('.container');
let questionElement = document.getElementById('question');
let optionsElement = document.getElementById('options');
let nextButton = document.getElementById('next-button');

function showQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(index, question.correct);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(index, correct) {
    if (index === correct) {
        alert('Утипути!');
        nextButton.style.display = 'block';
    } else {
        alert('Лохххх!');
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
        currentQuestion++;
        nextButton.style.display = 'none';
    } else {
        questionElement.textContent = "Поздравляю, Жасмина! Ты отлично справилась с вопросами. Желаю тебе самого чудесного дня рождения! Пусть каждый твой день будет наполнен радостью и смехом. Ты самая уникальная и неповторимая, и мы все тебя очень любим. Помни, что только ты могла ответить на все эти вопросы! 🎉\n\n" +
            "И еще... Америкага бориб шишиб кетма(в прямом смысле) 😄";
        optionsElement.innerHTML = '';
        nextButton.style.display = 'none';
    }
}

nextQuestion();
