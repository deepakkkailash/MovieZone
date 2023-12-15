
document.addEventListener('DOMContentLoaded', function() {
    var fallingDownIntro = document.querySelector('.fallingdownintro');
    var loginButton = document.getElementById('login');

    if (fallingDownIntro && loginButton) {
        fallingDownIntro.addEventListener('animationend', function() {
            loginButton.classList.add('animation-ended');
        });
    } else {
        console.error("Element not found.");
    }
});