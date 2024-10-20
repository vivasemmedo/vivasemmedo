// src/Home.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove a autenticação do localStorage
    localStorage.removeItem('isAuthenticated');
    // Redireciona para a página de login
    navigate('/');
  };
  return (
    <div className="container">
      <h1 className="title">Viva sem medo</h1>

      <div className="cards-container">
        {/* Card 1 - Ansiedade */}
        <Link to="/ansiedade" className="card">
          <h2>Ansiedade</h2>
          <p>
            Explore maneiras de lidar com a ansiedade e como se sentir mais
            calmo em momentos de tensão.
          </p>
        </Link>

        {/* Card 2 - Estresse */}
        <Link to="/estresse" className="card">
          <h2>Estresse</h2>
          <p>
            Entenda as causas do estresse e descubra técnicas para relaxar
            e melhorar o bem-estar diário.
          </p>
        </Link>

        {/* Card 3 - Fobias */}
        <Link to="/fobia" className="card">
          <h2>Fobias</h2>
          <p>
            Aprenda como enfrentar suas fobias e lidar com medos
            irracionais através de estratégias eficazes.
          </p>
        </Link>

        {/* Card 4 - Solidão */}
        <Link to="/solidao" className="card">
          <h2>Solidão</h2>
          <p>
            Saiba mais sobre o impacto da solidão e descubra formas de se
            conectar com outras pessoas.
          </p>
        </Link>
      </div>

      {/* Botão de Logout */}
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
    </div>
  );
}

export default Home;
