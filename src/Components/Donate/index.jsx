import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, FormWrapper, Title, FormCol, FormRow, Input, Select, TextLink, StyledLink, Button } from './DonateStyles';

const Donate = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipo, setTipo] = useState('');
    const [porte, setPorte] = useState('');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');

    const navigate = useNavigate();

    const handleDonate = () => {
        if (!nome || !idade || !sexo || !tipo || !porte || !imagem || !descricao) {
            return alert('Preencha todos os campos');
        }

        try {
            const response = axios.post('http://localhost:3001/donate', {
                nome,
                idade,
                sexo,
                tipo,
                porte,
                imagem,
                descricao
            });
            if (response.status !== 200) throw new Error('Erro ao doar animal');
            alert('Animal enviado para analise');
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <Container>
            <FormWrapper>
                <Title>Formulário de Doação</Title>
                <FormRow>
                    <FormCol>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="text"
                                placeholder="Idade"
                                value={idade}
                                onChange={e => setIdade(e.target.value)}
                            />
                        </FormRow>
                        <FormRow>
                            <Select value={tipo} onChange={e => setTipo(e.target.value)}>
                                <option value="" disabled selected>Tipo</option>
                                <option value="Cachorro">Cachorro</option>
                                <option value="Gato">Gato</option>
                                <option value="Ave">Ave</option>
                                <option value="Outro">Outro</option>
                            </Select>
                        </FormRow>
                        <FormRow>
                            <Select value={sexo} onChange={e => setSexo(e.target.value)}>
                                <option value="" disabled selected>Sexo</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </Select>
                        </FormRow>
                        <FormRow>
                            <Select value={porte} onChange={e => setPorte(e.target.value)}>
                                <option value="" disabled selected>Porte</option>
                                <option value="Pequeno">Pequeno</option>
                                <option value="Médio">Médio</option>
                                <option value="Grande">Grande</option>
                            </Select>
                        </FormRow>
                        <FormRow>
                            <Input
                                type="file"
                                placeholder="Imagem"
                                value={imagem}
                                onChange={e => setImagem(e.target.value)}
                            />
                        </FormRow>
                    </FormCol>

                    <FormCol>
                        <Input
                            style={{ marginLeft: '10px' }}
                            type="textarea"
                            placeholder="Insira uma descrição sobre o animal..."
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </FormCol>
                </FormRow>
                <TextLink>
                    Ao clicar em Doar, você concorda com nossos <StyledLink to="/">Termos, Política de Privacidade e Política de Cookies.</StyledLink>
                </TextLink>
                <Button onClick={handleDonate}>Doar</Button>
            </FormWrapper>
        </Container>
    )
}

export default Donate;
