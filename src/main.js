import { Header } from './Components/Header.js';
import { Content } from './Components/Content.js';
import { Footer } from './Components/Footer.js';

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Añadir componentes de la interfaz
  app.appendChild(Header());
  app.appendChild(Content());
  app.appendChild(Footer());

  // Simulación de chatbot con fetch (conéctalo a tu backend)
  const sendBtn = document.getElementById('sendBtn');
  const chatInput = document.getElementById('chatInput');
  const chatOutput = document.getElementById('chatOutput');

  sendBtn.addEventListener('click', async () => {
    const prompt = chatInput.value;
    chatInput.value = 'Cargando...'; // Indicador de carga mientras obtenemos la respuesta

    if (!prompt.trim()) {
      chatOutput.innerText = 'Por favor, escribe una pregunta antes de enviar.';
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }) // Enviar la pregunta al backend
      });
      
      if (response.ok) {
        const data = await response.json();
        // Mostrar la respuesta o un mensaje de error si no hay respuesta
        chatOutput.innerText = data.response || 'Sin respuesta';
      } else {
        chatOutput.innerText = 'Error al obtener la respuesta del servidor';
      }
    } catch (err) {
      chatOutput.innerText = 'Error al conectar con el chatbot'; // Error en caso de fallo de conexión
    }

    chatInput.value = ''; // Limpiar el campo de entrada después de enviar la pregunta
  });
});
