const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

const correctAnswers = {
	1: 'B',
	2: 'A',
	3: 'B',
	4: 'C',
	5: 'D',
	6: 'B',
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