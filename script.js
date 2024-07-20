const flashcards = [
    { question: '안녕하세요', answer: 'Hello', choices: ['Hello', 'Goodbye', 'Thank you', 'Please'] },
    { question: '감사합니다', answer: 'Thank you', choices: ['Sorry', 'Please', 'Thank you', 'Excuse me'] },
    { question: '사랑해요', answer: 'I love you', choices: ['I hate you', 'I love you', 'I miss you', 'Hello'] }
];

let currentCardIndex = 0;

const flashcardContainer = document.getElementById('flashcard-container');
const choicesContainer = document.getElementById('choices-container');
const feedbackContainer = document.getElementById('feedback-container');
const nextCardButton = document.getElementById('next-card');

function showFlashcard(index) {
    flashcardContainer.textContent = flashcards[index].question;
    showChoices(index);
    feedbackContainer.textContent = ''; // Clear previous feedback
}

function showChoices(index) {
    choicesContainer.innerHTML = ''; // Clear previous choices
    const choices = flashcards[index].choices;
    choices.forEach(choice => {
        const choiceElement = document.createElement('div');
        choiceElement.className = 'choice';
        choiceElement.textContent = choice;
        choiceElement.addEventListener('click', () => {
            checkAnswer(choice, flashcards[index].answer);
        });
        choicesContainer.appendChild(choiceElement);
    });
}

function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
        feedbackContainer.textContent = 'Correct!';
        feedbackContainer.className = 'correct';
    } else {
        feedbackContainer.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
        feedbackContainer.className = 'wrong';
    }
}

nextCardButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showFlashcard(currentCardIndex);
});

showFlashcard(currentCardIndex);
