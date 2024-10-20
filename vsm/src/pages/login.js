// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = e => {
    e.preventDefault();

    if (email === 'aluno' && password === 'unica123') {
      // Marca o usuário como autenticado
      localStorage.setItem('isAuthenticated', 'true');
      // Redireciona para a página Home
      navigate('/home');
    } else {
      setError('Login ou senha incorretos');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        }}
      >
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Login:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" style={{ marginTop: '20px' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
