// index.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, FormWrapper, Title, FormRow, Input, Button, TextLink, StyledLink } from './SignupStyles';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [doc, setDoc] = useState('');
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
			const response = await axios.post('http://localhost:3001/users/signup', { name, email, password, phone, doc, birthdate, address, state, city });
			if (response.status !== 200) throw new Error('Erro ao cadastrar usuário');
			alert('Usuário cadastrado com sucesso!');
			navigate('/');
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<Container>
			<FormWrapper>
				<Title>Crie sua Conta</Title>
				<FormRow>
					<Input
						type="text"
						placeholder="Nome completo"
						value={name}
						onChange={(e) => setName(e.target.value)}
						fullWidth
					/>
				</FormRow>
				<FormRow>
					<Input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="tel"
						placeholder="Celular Whatsapp"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</FormRow>
				<FormRow>
					<Input
						type="text"
						placeholder="RG/CPF"
						value={doc}
						onChange={(e) => setDoc(e.target.value)}
					/>
					<Input
						type="date"
						value={birthdate}
						onChange={(e) => setBirthdate(e.target.value)}
					/>
				</FormRow>
				<FormRow>
					<Input
						type="text"
						placeholder="Endereço completo"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						fullWidth
					/>
				</FormRow>
				<FormRow>
					<Input
						type="text"
						placeholder="Estado"
						value={state}
						onChange={(e) => setState(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Cidade"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</FormRow>
				<FormRow>
					<Input
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						fullWidth
					/>
				</FormRow>
				<TextLink>
					Ao clicar em Cadastrar, você concorda com nossos <StyledLink to="/">Termos, Política de Privacidade e Política de Cookies.</StyledLink>
				</TextLink>
				<Button onClick={handleSignup}>Cadastrar</Button>
			</FormWrapper>
		</Container>
	);
};

export default Signup;
