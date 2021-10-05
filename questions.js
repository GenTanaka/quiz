const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

const correctAnswers = {
	question1: 'B',
	question2: 'A',
	question3: 'B',
	question4: 'C',
	question5: 'D',
	question6: 'B',
}

function checkClickedAnswer(event) {
	const clickedAnswerElement = event.currentTarget;
	const selectedAnswer = clickedAnswerElement.dataset.answer;

	const questionId = clickedAnswerElement.closest('ol.answers');
	const correctAnswer = correctAnswers[questionId.dataset.id];

	let message;
	let ansColorCode;

	if (selectedAnswer == correctAnswer) {
		message = '正解です！おめでとう！';
		ansColorCode = '';
	} else {
		message = 'ざんねん！不正解です！';
		ansColorCode = '#f05959';
	}

	alert(message)

	document.querySelector('span#correct-answer').style.color = ansColorCode;
	document.querySelector('div#section-correct-answer').style.display = 'block';
}