export function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-white text-center p-4 mt-auto';
  
    footer.innerHTML = `
      <div class="container">
        <p class="mb-2">
          <i class="fas fa-capsules me-2"></i>
          &copy; 2025 Droguería Salud Total. Todos los derechos reservados.
        </p>
        <div>
          <a href="#" class="text-white me-3"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    `;
  
    return footer;
  }
  