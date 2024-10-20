// src/Pagina4.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

function Solidao() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/home')} class="buttonStyle">
        Voltar para Home
      </button>

      <h1>Solidão</h1>

      <h2>Dicas para Superar a Solidão</h2>

      <ul>
        <li>
          <strong>Conecte-se com os Outros:</strong> Faça chamadas de vídeo
          ou mande mensagens para amigos regularmente.
        </li>
        <li>
          <strong>Faça Novas Atividades:</strong> Participe de atividades
          sociais para conhecer novas pessoas.
        </li>
        <li>
          <strong>Aprenda a Ficar Confortável Sozinho:</strong> Pratique
          hobbies e autocuidado durante momentos de solidão.
        </li>
        <li>
          <strong>Adote um Animal de Estimação:</strong> Ter a companhia de
          um animal pode ajudar a reduzir a sensação de solidão.
        </li>
      </ul>
    </div>
  );
}

export default Solidao;
