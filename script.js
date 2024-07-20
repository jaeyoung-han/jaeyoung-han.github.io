document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        { question: '안녕하세요', answer: 'Hello', choices: ['Hello', 'Goodbye', 'Thank you', 'Please'] },
        { question: '감사합니다', answer: 'Thank you', choices: ['Sorry', 'Please', 'Thank you', 'Excuse me'] },
        { question: '사랑해요', answer: 'I love you', choices: ['I hate you', 'I love you', 'I miss you', 'Hello'] }
    ];

    let currentCardIndex = 0;
    let currentKoreanText = ''; // Variable to store the current Korean text
    let score = 0; // Variable to store the score

    const flashcardContainer = document.getElementById('flashcard-container');
    const choicesContainer = document.getElementById('choices-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const nextCardButton = document.getElementById('next-card');
    const replayButton = document.getElementById('replay');
    const scoreDisplay = document.getElementById('score');

    function showFlashcard(index) {
        const flashcard = flashcards[index];
        currentKoreanText = flashcard.question; // Store the current Korean text
        flashcardContainer.textContent = flashcard.question;
        showChoices(flashcard);
        feedbackContainer.textContent = ''; // Clear previous feedback
        speakKorean(flashcard.question); // Speak the Korean text
    }

    function showChoices(flashcard) {
        choicesContainer.innerHTML = ''; // Clear previous choices
        flashcard.choices.forEach(choice => {
            const choiceElement = document.createElement('div');
            choiceElement.className = 'choice';
            choiceElement.textContent = choice;
            choiceElement.addEventListener('click', () => {
                checkAnswer(choice, flashcard.answer);
            });
            choicesContainer.appendChild(choiceElement);
        });
    }

    function checkAnswer(selectedChoice, correctAnswer) {
        const feedback = selectedChoice === correctAnswer ? 'Correct!' : `Wrong! The correct answer is: ${correctAnswer}`;
        feedbackContainer.textContent = feedback;
        feedbackContainer.className = selectedChoice === correctAnswer ? 'correct' : 'wrong';
        speak(feedback); // Speak feedback in English

        if (selectedChoice === correctAnswer) {
            score++; // Increment score if answer is correct
            updateScore(); // Update score display
        }
    }

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function speakKorean(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR'; // Set the language to Korean
        window.speechSynthesis.speak(utterance);
    }

    function updateScore() {
        scoreDisplay.textContent = score; // Update the score display
    }

    nextCardButton.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        showFlashcard(currentCardIndex);
    });

    replayButton.addEventListener('click', () => {
        if (currentKoreanText) {
            speakKorean(currentKoreanText); // Replay the current Korean text
        }
    });

    showFlashcard(currentCardIndex); // Load the first flashcard
});
