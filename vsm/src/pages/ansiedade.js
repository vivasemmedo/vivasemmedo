// src/Pagina1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Ansiedade() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/home')} class="buttonStyle">
        Voltar para Home
      </button>

      <h1>Ansiedade</h1>
      <h2>Dicas para Lidar com a Ansiedade</h2>
      <ul>
        <li>
          <strong>Controle a Respiração:</strong> Inspire lentamente por 4
          segundos, segure o ar por 4 segundos e depois expire por 4
          segundos. Repita por 5 minutos para acalmar o sistema nervoso.
        </li>
        <li>
          <strong>Foque no Presente:</strong> Pratique mindfulness
          sentando-se confortavelmente e focando na respiração por 5
          minutos.
        </li>
        <li>
          <strong>Limite o Consumo de Cafeína:</strong> Reduza o consumo de
          cafeína para evitar aumentos nos sintomas de ansiedade.
        </li>
        <li>
          <strong>Fale Sobre Suas Preocupações:</strong> Compartilhar suas
          ansiedades pode aliviar a carga emocional.
        </li>
      </ul>
    </div>
  );
}

export default Ansiedade;
