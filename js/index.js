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

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Mostrar mensaje de éxito
            const successMessage = document.getElementById('successMessage');
            successMessage.hidden = false;
            
            // Limpiar el formulario
            contactForm.reset();
            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                successMessage.hidden = true;
            }, 5000);
        });
    }

    // Galería Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');

    if (galleryItems && galleryItems.length) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                lightboxModal.removeAttribute('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.setAttribute('hidden', '');
                document.body.style.overflow = 'auto';
            }
        });
    }
});