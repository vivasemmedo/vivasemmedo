// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Ansiedade from './pages/ansiedade';
import Estresse from './pages/estresse';
import Fobia from './pages/fobias';
import Solidao from './pages/solidao';

// Função que verifica se o usuário está autenticado
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// Componente de Rota Protegida
function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/" element={<Login />} />

        {/* Rotas protegidas */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ansiedade"
          element={
            <ProtectedRoute>
              <Ansiedade />
            </ProtectedRoute>
          }
        />
        <Route
          path="/estresse"
          element={
            <ProtectedRoute>
              <Estresse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fobia"
          element={
            <ProtectedRoute>
              <Fobia />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solidao"
          element={
            <ProtectedRoute>
              <Solidao />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
