export function Header() {
    const header = document.createElement('header');
    header.className = 'bg-primary text-white py-4 px-3 shadow-lg rounded-bottom';
  
    header.innerHTML = `
      <div class="container">
        <!-- Encabezado principal -->
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div class="text-center text-md-start mb-3 mb-md-0">
            <h1 class="display-5 fw-bold mb-1">
              <i class="fas fa-prescription-bottle-alt me-2"></i> Droguería Salud Total
            </h1>
            <p class="lead fst-italic">Cuidando tu bienestar con experiencia y corazón</p>
          </div>
          
          <!-- Logo o ícono extra -->
          <div class="d-none d-md-block">
            <img src="https://cdn-icons-png.flaticon.com/512/2975/2975170.png" alt="Logo salud" width="80" class="img-fluid rounded-circle border border-white shadow-sm">
          </div>
        </div>
  
        <!-- Submenú o enlaces rápidos -->
        <nav class="mt-3">
          <ul class="nav justify-content-center gap-3 flex-wrap">
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" href="#"><i class="fas fa-home me-1"></i>Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" href="#"><i class="fas fa-capsules me-1"></i>Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" href="#"><i class="fas fa-headset me-1"></i>Soporte</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" href="#"><i class="fas fa-map-marker-alt me-1"></i>Ubicación</a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  
    return header;
  }
  