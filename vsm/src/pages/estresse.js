// src/Pagina2.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Estresse() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/home')} class="buttonStyle">
        Voltar para Home
      </button>

      <h1>Estresse</h1>
      <h2>Dicas para Gerenciar o Estresse</h2>
      <ul>
        <li>
          <strong>Faça Pausas: </strong> Pare por 10 minutos para caminhar
          e respirar, ajudando a acalmar a mente.
        </li>
        <li>
          <strong>Atividade Física: </strong> Pratique exercícios por 30
          minutos para reduzir o cortisol, o hormônio do estresse.
        </li>
        <li>
          <strong>Organização: </strong>Priorize tarefas e mantenha uma
          rotina equilibrada para evitar sobrecarga.
        </li>
        <li>
          <strong>Desenvolva um Hábito Relaxante: </strong>Medite
          diariamente por 5 minutos para acalmar a mente.
        </li>
      </ul>
    </div>
  );
}

export default Estresse;
