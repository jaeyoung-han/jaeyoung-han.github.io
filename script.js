const flashcards = [
    { question: '안녕하세요', answer: 'Hello' },
    { question: '감사합니다', answer: 'Thank you' },
    { question: '사랑해요', answer: 'I love you' }
];

let currentCardIndex = 0;

const flashcardContainer = document.getElementById('flashcard-container');
const nextCardButton = document.getElementById('next-card');

function showFlashcard(index) {
    console.log('Showing flashcard:', index); // Debugging statement
    flashcardContainer.textContent = flashcards[index].question;
}

nextCardButton.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    console.log('Next card index:', currentCardIndex); // Debugging statement
    showFlashcard(currentCardIndex);
});

console.log('Initial flashcard index:', currentCardIndex); // Debugging statement
showFlashcard(currentCardIndex);
