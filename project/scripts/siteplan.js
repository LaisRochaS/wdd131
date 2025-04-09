function checkAnswer(answer) {
    const correctAnswer = 8; 
    const resultElement = document.getElementById('result');
  
    if (answer === correctAnswer) {
      resultElement.textContent = "Correct! Well done.";
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = "Oops! Try again.";
      resultElement.style.color = 'red';
    }
  }

  function startMathChallenge() {
  
    const mathQuestion = document.getElementById('math-question');
    mathQuestion.textContent = "What is 7 + 6?"; 
    document.getElementById('result').textContent = ""; 
  }
document.getElementById("currentyear").textContent = new Date().getFullYear();
