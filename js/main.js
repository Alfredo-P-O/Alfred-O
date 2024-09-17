// Palabras a escribir
const words = ["Desarrollador Web", "Fron-end", "Full Stack Jr", "Freelancer"]; 
const typewriterElement = document.querySelector('.typewriter');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function typeWords() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
        delay = 100;
    } else {
        charIndex++;
        delay = 200;
    }
    typewriterElement.textContent = currentWord.slice(0, charIndex);
    // Cuando la palabra esté completamente escrita
    if (!isDeleting && charIndex === currentWord.length) {
        delay = 1000; // Espera antes de comenzar a borrar
        isDeleting = true;
    }
    // Cuando la palabra esté completamente borrada
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Cambia a la siguiente palabra
        wordIndex = (wordIndex + 1) % words.length; 
        delay = 500;
    }
    setTimeout(typeWords, delay);
}
document.addEventListener('DOMContentLoaded', () => typeWords());