document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
  const challenges = [
    { question: 'What is 3 + 5?', answer: 8 },
    { question: 'What is 12 - 4?', answer: 8 },
    { question: 'What is 7 x 6?', answer: 42 },
    { question: 'What is 56 ÷ 7?', answer: 8 }
  ];

  let currentChallengeIndex = 0;
  const challengeElement = document.getElementById('math-challenge');
  const nextButton = document.getElementById('next-challenge');

  function updateChallenge() {
    const challenge = challenges[currentChallengeIndex];
    challengeElement.textContent = challenge.question;
  }

  nextButton.addEventListener('click', () => {
    currentChallengeIndex = (currentChallengeIndex + 1) % challenges.length;
    updateChallenge();
  });

  updateChallenge();
});

const bingoGrid = document.getElementById('bingo-grid');
const mathQuestionElement = document.getElementById('math-question');
const newQuestionButton = document.getElementById('new-question');

const operations = ['+', '-', '×'];
const gridNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
let markedCells = [];
let currentAnswer = null;

function saveProgress() {
  localStorage.setItem('markedCells', JSON.stringify(markedCells));
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem('markedCells'));
  if (Array.isArray(saved)) {
    markedCells = saved;
    markedCells.forEach(num => {
      const cell = [...bingoGrid.children].find(c => c.textContent == num);
      if (cell) cell.classList.add('marked');
    });
  }
}

function createBingoGrid() {
  bingoGrid.innerHTML = '';
  gridNumbers.forEach(num => {
    const cell = document.createElement('div');
    cell.classList.add('bingo-cell');
    cell.textContent = num;
    cell.addEventListener('click', () => markCell(num));
    bingoGrid.appendChild(cell);
  });
}

function generateMathQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let answer;

  switch (operation) {
    case '+': answer = num1 + num2; break;
    case '-': answer = num1 - num2; break;
    case '×': answer = num1 * num2; break;
  }

  currentAnswer = answer;
  mathQuestionElement.textContent = `${num1} ${operation} ${num2} = ?`;
  return answer;
}

function markCell(num) {
  if (num === currentAnswer && !markedCells.includes(num)) {
    const cell = [...bingoGrid.children].find(c => c.textContent == num);
    cell.classList.add('marked');
    markedCells.push(num);
    saveProgress();
    checkForBingo();
  }
}

function checkForBingo() {
  const winningPatterns = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];

  for (const pattern of winningPatterns) {
    const isBingo = pattern.every(index => markedCells.includes(gridNumbers[index]));
    if (isBingo) {
      alert('🎉 Bingo! You won!');
      return;
    }
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  const resultElement = document.getElementById('result');

  if (parseInt(userAnswer) === 9) {
    resultElement.textContent = 'Great job! 4 + 5 = 9.';
    resultElement.style.color = 'green';
  } else {
    resultElement.textContent = 'Oops! Try again. 4 + 5 = ?';
    resultElement.style.color = 'red';
  }
}

newQuestionButton.addEventListener('click', () => {
  generateMathQuestion();
});

// Initialize game
createBingoGrid();
loadProgress();
generateMathQuestion();