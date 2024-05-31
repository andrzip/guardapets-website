import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!email || !password) {
            alert('Preencha todos os campos');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users', { name, email, password, phone, birthdate, address, state, city });
            if (response.status !== 200) throw new Error('Erro ao cadastrar usuário');
            alert('Usuário cadastrado com sucesso!');
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container-fluid">
            <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Digite seu telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Digite seu endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Digite seu estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <input
                type="text"
                placeholder="Digite sua cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <p>
                Já possui uma conta? <Link to="/signin">Fazer Login</Link>
            </p>
            <button onClick={handleSignup}>Cadastrar</button>
        </div>
    );
};

export default Index;
