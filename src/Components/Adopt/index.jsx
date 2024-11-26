import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
import {
  HeaderContainer,
  Title,
  Input,
  SearchButton,
  AnimalListContainer,
  AnimalCard,
  AnimalImage,
  AnimalDetails,
  AnimalFooter,
  AdoptButton,
  FilterContainer,
  FilterLabel,
  FilterSelect,
} from "./AdoptStyles";

const Adopt = () => {
  const [inputCep, setInputCep] = useState("");
  const [cep, setCep] = useState("");
  const [animals, setAnimals] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    size: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCepChange = (event) => {
    setInputCep(event.target.value);
  };

  const handleSearch = () => {
    setCep(inputCep);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // Construa a URL com base nos filtros
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = cep
          ? `/animals/list/${cep}?${queryParams}`
          : `/animals/list?${queryParams}`;

        const response = await Api.get(endpoint);
        setAnimals(response.data);
      } catch (err) {
        console.error("Erro ao buscar animais:", err);
        alert("Animais indisponíveis no momento");
        return navigate("/");
      }
    };

    fetchAnimals();
  }, [cep, filters, navigate]);

  const handleAdoptClick = (animalId) => {
    navigate(`/animal/${animalId}`);
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

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FilterContainer>
          <Title>Filtros</Title>
          <FilterLabel htmlFor="type">Tipo:</FilterLabel>
          <FilterSelect
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </FilterSelect>

          <FilterLabel htmlFor="age">Idade:</FilterLabel>
          <FilterSelect
            id="age"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
          >
            <option value="">Todas</option>
            <option value="Filhote">Filhote</option>
            <option value="Adulto">Adulto</option>
            <option value="Idoso">Idoso</option>
          </FilterSelect>

          <FilterLabel htmlFor="size">Tamanho:</FilterLabel>
          <FilterSelect
            id="size"
            name="size"
            value={filters.size}
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </FilterSelect>

          <FilterLabel htmlFor="gender">Gênero:</FilterLabel>
          <FilterSelect
            id="gender"
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </FilterSelect>
        </FilterContainer>

        <AnimalListContainer>
          {animals.map((animal) => (
            <AnimalCard key={animal.animal_id}>
              <AnimalImage src={animal.animal_picurl} alt={animal.animal_name} />
              <AnimalDetails>
                <span>{animal.user_name}</span>
                <h3>{animal.animal_name.split(" ")[0]}</h3>
                <p>
                  {animal.user_city}, {animal.user_state}
                </p>
              </AnimalDetails>
              <AnimalFooter gender={animal.animal_gender}>
                <span className="gender">
                  {animal.animal_gender === "Fêmea" ? "♀" : "♂"}
                </span>
                <AdoptButton onClick={() => handleAdoptClick(animal.animal_id)}>
                  Quero adotar
                </AdoptButton>
              </AnimalFooter>
            </AnimalCard>
          ))}
        </AnimalListContainer>
      </div>
    </div>
  );
};

export default Adopt;
