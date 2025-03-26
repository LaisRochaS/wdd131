// Function for math challenge question and answer checking
function checkAnswer(answer) {
    const correctAnswer = 8;
    const resultText = document.getElementById("result");
  
    if (answer === correctAnswer) {
      resultText.textContent = "Correct! Great job!";
      resultText.style.color = "green";
    } else {
      resultText.textContent = "Oops! Try again!";
      resultText.style.color = "red";
    }
  }
  
  // Optional: Function to start a math challenge by selecting random problems
  document.getElementById("startMathChallenge").addEventListener("click", function() {
    const mathQuestions = [
      { question: "What is 5 + 3?", correctAnswer: 8 },
      { question: "What is 12 - 4?", correctAnswer: 8 },
      { question: "What is 7 + 9?", correctAnswer: 16 },
    ];
  
    const randomQuestion = mathQuestions[Math.floor(Math.random() * mathQuestions.length)];
    document.getElementById("math-question").textContent = randomQuestion.question;
  
    const buttons = document.querySelectorAll(".answer");
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        checkAnswer(Number(button.textContent));
      });
    });
  });
  