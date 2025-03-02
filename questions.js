document.addEventListener("DOMContentLoaded", function () {
    const quizSection = document.querySelector(".quiz-section");
    const resultSection = document.querySelector(".result-section");
    const nextButton = document.getElementById("nextBtn");
    const restartButton = document.getElementById("restartBtn");
    const homeButton = document.getElementById("homeBtn");
  
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];
  

    async function fetchQuestions() {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
        const data = await response.json();
        questions = data.results.map((q) => ({
          question: q.question,
          correct: q.correct_answer,
          options: [...q.incorrect_answers, q.correct_answer],
        }));
        showQuestion();
      } catch (error) {
        console.error("Error fetching questions:", error);
        alert("Failed to load questions. Please try again.");
      }
    }
  
   
    function showQuestion() {
      const question = questions[currentQuestionIndex];
      const options = shuffleArray(question.options);
  
      document.getElementById("question-text").innerHTML = question.question;
      const optionList = document.getElementById("option-list");
      optionList.innerHTML = "";
      options.forEach((option) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option-item");
        optionDiv.textContent = option;
        optionDiv.addEventListener("click", function () {
          selectOption(optionDiv);
        });
        optionList.appendChild(optionDiv);
      });
      document.getElementById("question-progress").textContent = `Question ${
        currentQuestionIndex + 1
      } of ${questions.length}`;
    }
  
   
    function selectOption(selectedOption) {
      const options = document.querySelectorAll(".option-item");
      const correctAnswer = questions[currentQuestionIndex].correct;
      options.forEach((option) => {
        option.style.pointerEvents = "none";
        if (option.textContent === correctAnswer) {
          option.style.backgroundColor = "#90EE90";
        }
        if (option === selectedOption && option.textContent !== correctAnswer) {
          option.style.backgroundColor = "#FFB6C1";
        }
      });
      if (selectedOption.textContent === correctAnswer) {
        score++;
      }
      nextButton.style.display = "block";
    }
  
    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        resetOptions();
        showQuestion();
      } else {
        quizSection.classList.remove("active");
        resultSection.classList.add("active");
        showResult();
      }
    });
  

    function resetOptions() {
      const options = document.querySelectorAll(".option-item");
      options.forEach((option) => {
        option.style.backgroundColor = "white";
        option.style.pointerEvents = "auto";
      });
      nextButton.style.display = "none";
    }
  

    function showResult() {
      document.getElementById("score").textContent = score;
      document.getElementById("total-questions").textContent = questions.length;
    }
  

    function shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  
  
    restartButton.addEventListener("click", () => {
      window.location.reload();
    });

    homeButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  
 
    fetchQuestions();
  });
  