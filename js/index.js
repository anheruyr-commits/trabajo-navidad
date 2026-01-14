// Esperamos a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    toggleButton.addEventListener("click", () => {
        // Alternar la clase que muestra el menú
        navMenu.classList.toggle("nav-menu_visible");
    });

    // Accordion FAQ independiente (permite múltiples respuestas abiertas)
    const faqButtons = document.querySelectorAll('.faq-question');
    if (faqButtons && faqButtons.length) {
        faqButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const isOpen = btn.getAttribute('aria-expanded') === 'true';
                const answer = btn.parentElement.querySelector('.faq-answer');

                if (isOpen) {
                    btn.setAttribute('aria-expanded', 'false');
                    if (answer) answer.hidden = true;
                } else {
                    btn.setAttribute('aria-expanded', 'true');
                    if (answer) answer.hidden = false;
                }
            });
        });
    }
});