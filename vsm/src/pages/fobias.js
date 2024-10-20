// src/Pagina3.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

function Fobias() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/home')} class="buttonStyle">
        Voltar para Home
      </button>

      <h1>Fobias</h1>

      <h2>Dicas para Lidar com Fobias</h2>

      <ul>
        <li>
          <strong>Exposição Gradual:</strong> Enfrente seu medo de forma
          gradual, começando com pequenos passos.
        </li>
        <li>
          <strong>Terapia Cognitivo-Comportamental:</strong> Trabalhe com
          um terapeuta especializado para reprogramar sua resposta ao medo.
        </li>
        <li>
          <strong>Relaxamento:</strong> Pratique respiração profunda para
          relaxar quando confrontar seus medos.
        </li>
        <li>
          <strong>Buscar Suporte:</strong> Fale sobre suas fobias em grupos
          de apoio ou com amigos de confiança.
        </li>
      </ul>
    </div>
  );
}

export default Fobias;
