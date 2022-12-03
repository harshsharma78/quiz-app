'use strict';

const quizData = [
	{
		question: 'What is four?',
		a: 'number',
		b: 'word',
		c: 'both a and b',
		d: 'none',
		correct: 'c',
	},
	{
		question: 'What is the most loved programming language in 2021?',
		a: 'Java',
		b: 'Python',
		c: 'C++',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'Who is the President of India?',
		a: 'Ram Nath Kovind',
		b: 'Droupadi Murmu',
		c: 'Narendar Modi',
		d: 'Arvind Kejriwal',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Hypertext Makeup Language',
		c: 'Hypertext Markdown Language',
		d: 'none',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1997',
		b: '1995',
		c: '1996',
		d: 'none',
		correct: 'b',
	},
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function getSelectedRadio() {
	let answer = undefined;
	answerEls.forEach(answerEl => {
		if (answerEl.checked) {
			// get the id of the input from HTML
			answer = answerEl.id;
		}
	});
	return answer;
}

function deselectRadio() {
	let answer = undefined;
	answerEls.forEach(answerEl => {
		answerEl.checked = false;
	});
}

function loadQuiz() {
	deselectRadio();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
	const answer = getSelectedRadio();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
            <h1>You scored ${score}/${quizData.length} correctly.
            </h1>
            <button onclick="location.reload()">Replay
            </button>`;
		}
	}
});

loadQuiz();
