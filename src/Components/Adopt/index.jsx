import React, { useState } from "react";
import { AnimalList, HeaderContainer, Title, Input, SearchButton } from "./AdoptStyles";

const Adopt = () => {
  const [inputCep, setInputCep] = useState('');
  const [cep, setCep] = useState(''); 

  const handleCepChange = (event) => {
    setInputCep(event.target.value);
  };

  const handleSearch = () => {
    setCep(inputCep);
  };

  return (
    <div>
      <HeaderContainer>
        <Title>Lista de Animais</Title>
        <span>|</span>
        <Title>Busca por CEP:</Title>
        <Input
          type="text"
          value={inputCep}
          onChange={handleCepChange}
          placeholder="Digite o CEP"
        />
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
      </HeaderContainer>
      <AnimalList cep={cep} />
    </div>
  );
};

export default Adopt;
