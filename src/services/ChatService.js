// src/services/ChatService.js

export const callChatAPI = async (prompt) => {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
  
    if (response.ok) {
      const data = await response.json();
      return data.response;  // La respuesta de la API
    } else {
      throw new Error('Error en la API');
    }
  };
  