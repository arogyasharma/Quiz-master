
    document.addEventListener('DOMContentLoaded', function() {
        const startQuizButton = document.querySelector('.button');
        const popupOverlay = document.getElementById('popup-overlay');
        const exitQuizButton = document.getElementById('exit-quiz');
        const continueQuizButton = document.getElementById('continue-quiz');

        startQuizButton.addEventListener('click', function() {
            popupOverlay.style.display = 'flex';
        });

        exitQuizButton.addEventListener('click', function() {
            popupOverlay.style.display = 'none';
        });

        continueQuizButton.addEventListener('click', function() {
            
           
            popupOverlay.style.display = 'none';
        });
    });
