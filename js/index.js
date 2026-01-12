// Esperamos a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    toggleButton.addEventListener("click", () => {
        // Alternar la clase que muestra el menú
        navMenu.classList.toggle("nav-menu_visible");
    });
});