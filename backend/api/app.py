from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import requests
from flask_cors import CORS

# Cargar las variables de entorno
load_dotenv()
OPEN_ROUTER = os.getenv('OPEN_ROUTER')

app = Flask(__name__)
CORS(app)  # Permitir CORS para todo el app

# Ruta para la raíz del servidor
@app.route('/')
def home():
    return 'Bienvenido a la API de Chat'

# Función para llamar a la API de DeepSeek
def call_deepseek(api_key, prompt):
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    data = {
        "model": "deepseek/deepseek-r1:free",
        "messages": [
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7,
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()  # Verifica si la respuesta tiene errores
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

# Ruta para manejar la solicitud de chat
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()  # Obtener datos del frontend
    prompt = data.get('prompt', '')  # Extraer la pregunta del frontend

    if prompt:
        # Obtener respuesta de la API de DeepSeek
        response_text = get_response(prompt)
        return jsonify({"response": response_text})
    else:
        return jsonify({"error": "No se proporcionó un prompt"}), 400

# Función para obtener la respuesta desde la API externa
def get_response(prompt):
    api_response = call_deepseek(OPEN_ROUTER, prompt)

    if "choices" in api_response:
        return api_response['choices'][0]['message']['content']
    else:
        return f"Error: {api_response.get('error', 'No se pudo obtener la respuesta')}"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)

