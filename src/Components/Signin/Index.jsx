import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Styles.css';

const Index = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    if (!email || !password) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/users/signin', { email, password });
      alert('Acesso autorizado!');
      navigate('/');
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div className="container c-signin-body position-absolute top-50 start-50 translate-middle h-75">
      <div className="col-5 text-center position-absolute top-50 start-0 translate-middle-y">
        <h1 className="display-4 fw-bold">Fazer Login</h1>
        <p className="fs-5 fw-bold">Entre com sua conta GuardaPets</p>
      </div>

      <div className="col-5 me-5 position-fixed top-50 end-0 translate-middle-y">
        <input
          type="email"
          className="form-control"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mt-3"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p>Esqueceu a senha? <a href="/">Redefinir senha</a></p>

        <div className="text-end">
          <a className='btn' href='/Signup'>Criar uma conta</a>
          <button onClick={handleSignin} className='btn btn-primary'>Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
