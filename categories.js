document.addEventListener("DOMContentLoaded", function () {

    const categoryCards = document.querySelectorAll(".category-card");
    const popupOverlay = document.getElementById("popup-overlay");
    const exitQuizButton = document.getElementById("exit-quiz");
    const continueQuizButton = document.getElementById("continue-quiz");
  
 
    categoryCards.forEach((card) => {
      card.addEventListener("click", function () {
      
        const selectedCategory = card.getAttribute("data-category");
        localStorage.setItem("selectedCategory", selectedCategory);

        popupOverlay.style.display = "flex";
      });
    });
 
    exitQuizButton.addEventListener("click", function () {
      popupOverlay.style.display = "none";
    });
  
   
    continueQuizButton.addEventListener("click", function () {
      window.location.href = "questions.html";
    });
  });
  