document.addEventListener('DOMContentLoaded', function(){
    const startQuizButton = document.getElementById('startQuiz');
    const popupOverlay = document.getElementById('popup-overlay');
    const exitQuizButton = document.getElementById('exit-quiz');
    const continueQuizButton = document.getElementById('continue-quiz');
    

    startQuizButton.addEventListener('click', () => {
      popupOverlay.style.display = 'flex';
    });
    
  
    exitQuizButton.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
    
  
    continueQuizButton.addEventListener('click', () => {
      window.location.href = "questions.html";
    });
  });
  