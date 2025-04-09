document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
  // Math challenge data
  const challenges = [
    { question: 'What is 3 + 5?', answer: 8 },
    { question: 'What is 12 - 4?', answer: 8 },
    { question: 'What is 7 x 6?', answer: 42 },
    { question: 'What is 56 ÷ 7?', answer: 8 }
  ];

  let currentChallengeIndex = 0;

  const challengeElement = document.getElementById('math-challenge');
  const nextButton = document.getElementById('next-challenge');

  // Function to update the challenge question
  function updateChallenge() {
    const challenge = challenges[currentChallengeIndex];
    challengeElement.textContent = challenge.question;
  }

  // Event listener for next challenge button
  nextButton.addEventListener('click', () => {
    currentChallengeIndex = (currentChallengeIndex + 1) % challenges.length;
    updateChallenge();
  });

  // Initialize the first challenge
  updateChallenge();
});
 // Generate a random 5x5 bingo grid with numbers (1 to 25)
 const bingoGrid = document.getElementById('bingo-grid');
 const mathQuestionElement = document.getElementById('math-question');
 const newQuestionButton = document.getElementById('new-question');

 // Random math operations to be used
 const operations = ['+', '-', '×'];

 // Bingo grid setup
 const gridNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
 let markedCells = [];
 let currentAnswer = null;

 // Generate the bingo grid cells
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

 // Generate a random math question and answer
 function generateMathQuestion() {
   const num1 = Math.floor(Math.random() * 10) + 1;
   const num2 = Math.floor(Math.random() * 10) + 1;
   const operation = operations[Math.floor(Math.random() * operations.length)];
   let answer;

   switch (operation) {
     case '+':
       answer = num1 + num2;
       break;
     case '-':
       answer = num1 - num2;
       break;
     case '×':
       answer = num1 * num2;
       break;
   }

   currentAnswer = answer;
   mathQuestionElement.textContent = `${num1} ${operation} ${num2} = ?`;

   return answer;
 }

 // Mark a bingo cell if the number matches the current answer
 function markCell(num) {
   if (num === currentAnswer && !markedCells.includes(num)) {
     const cell = [...bingoGrid.children].find(c => c.textContent == num);
     cell.classList.add('marked');
     markedCells.push(num);
     checkForBingo();
   }
 }

 // Check for bingo (complete line)
 function checkForBingo() {
   // Check rows, columns, and diagonals
   const winningPatterns = [
     // Rows
     [0, 1, 2, 3, 4],
     [5, 6, 7, 8, 9],
     [10, 11, 12, 13, 14],
     [15, 16, 17, 18, 19],
     [20, 21, 22, 23, 24],
     // Columns
     [0, 5, 10, 15, 20],
     [1, 6, 11, 16, 21],
     [2, 7, 12, 17, 22],
     [3, 8, 13, 18, 23],
     [4, 9, 14, 19, 24],
     // Diagonals
     [0, 6, 12, 18, 24],
     [4, 8, 12, 16, 20]
   ];

   for (const pattern of winningPatterns) {
     const isBingo = pattern.every(index => markedCells.includes(gridNumbers[index]));
     if (isBingo) {
       alert('Bingo! You won!');
       return;
     }
   }
 }

 // Generate a new question on button click
 newQuestionButton.addEventListener('click', () => {
   generateMathQuestion();
 });

 // Initialize the game
 createBingoGrid();
 generateMathQuestion();

   // Function to check the user's answer
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