export function Content() {
    const section = document.createElement('section');
    section.className = 'container my-5 p-4 rounded-lg shadow-lg bg-light text-dark';
  
    section.innerHTML = `
      <!-- Sección 1: Productos destacados -->
      <div class="mb-5">
        <h3 class="text-center text-primary mb-4"><i class="fas fa-capsules"></i> Productos Destacados</h3>
        <div class="row text-center">
          <div class="col-md-4 mb-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body">
                <i class="fas fa-pills fa-2x text-info mb-3"></i>
                <h5 class="card-title">Multivitamínicos</h5>
                <p class="card-text">Refuerza tu sistema inmunológico con vitaminas de alta calidad.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body">
                <i class="fas fa-head-side-virus fa-2x text-warning mb-3"></i>
                <h5 class="card-title">Antigripales</h5>
                <p class="card-text">Elimina síntomas de gripa con tratamientos efectivos y seguros.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card border-0 shadow h-100">
              <div class="card-body">
                <i class="fas fa-bottle-water fa-2x text-success mb-3"></i>
                <h5 class="card-title">Suplementos</h5>
                <p class="card-text">Energía y bienestar para tu día a día con suplementos naturales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sección 2: Servicios disponibles -->
      <div class="mb-5">
        <h3 class="text-center text-primary mb-4"><i class="fas fa-hand-holding-medical"></i> Servicios Disponibles</h3>
        <div class="row text-center">
          <div class="col-md-4 mb-3">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <i class="fas fa-syringe fa-2x text-danger mb-3"></i>
                <h5 class="card-title">Inyectología</h5>
                <p class="card-text">Aplicación profesional de medicamentos bajo normas de bioseguridad.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <i class="fas fa-heartbeat fa-2x text-danger mb-3"></i>
                <h5 class="card-title">Chequeo de presión</h5>
                <p class="card-text">Monitorea tu salud cardiovascular en minutos con nuestro equipo.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <i class="fas fa-mortar-pestle fa-2x text-primary mb-3"></i>
                <h5 class="card-title">Formulación Magistral</h5>
                <p class="card-text">Preparación personalizada de medicamentos bajo receta médica.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sección 3: Consejos de salud -->
      <div class="mb-5">
        <h3 class="text-center text-primary mb-4"><i class="fas fa-notes-medical"></i> Consejos de Salud</h3>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="alert alert-info d-flex align-items-center" role="alert">
              <i class="fas fa-glass-water me-3"></i> Mantente hidratado: toma al menos 8 vasos de agua al día.
            </div>
          </div>
          <div class="col-md-6">
            <div class="alert alert-success d-flex align-items-center" role="alert">
              <i class="fas fa-bed me-3"></i> Duerme bien: 7-8 horas por noche para una buena salud mental.
            </div>
          </div>
          <div class="col-md-6">
            <div class="alert alert-warning d-flex align-items-center" role="alert">
              <i class="fas fa-walking me-3"></i> Camina al menos 30 minutos diarios para activar tu metabolismo.
            </div>
          </div>
          <div class="col-md-6">
            <div class="alert alert-danger d-flex align-items-center" role="alert">
              <i class="fas fa-smoking-ban me-3"></i> Evita el tabaco: es la causa principal de enfermedades pulmonares.
            </div>
          </div>
        </div>
      </div>
  
      <!-- Chat Virtual -->
      <h2 class="text-center text-primary display-5 mb-4">
        <i class="fas fa-comments d-inline-block mb-2"></i> Asistente Virtual
      </h2>
  
      <div class="row justify-content-center mb-4">
        <div class="col-md-8">
          <div class="input-group shadow-sm">
            <input type="text" id="chatInput" class="form-control form-control-lg" placeholder="Escribe tu pregunta..." aria-label="Escribe tu pregunta">
            <button id="sendBtn" class="btn btn-lg btn-success ms-2">
              <i class="fas fa-paper-plane"></i> Enviar
            </button>
          </div>
        </div>
      </div>
  
      <div id="chatOutput" class="mt-4 p-4 bg-white rounded border border-secondary shadow-sm overflow-auto" style="max-height: 300px;">
        <p class="text-muted">Aquí aparecerán las respuestas del asistente...</p>
      </div>
    `;
  
    return section;
  }
  