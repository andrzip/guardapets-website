import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Services/ApiConfig";
import {
  Container,
  HeaderContainer,
  Title,
  AnimalListContainer,
  AnimalCard,
  AnimalImage,
  AnimalDetails,
  AnimalFooter,
  AdoptButton,
  FilterContainer,
  FilterSelect,
  FilterInput,
  FilterButton,
  ClearFilter,
} from "./AdoptStyles";

const buildQueryParams = (filters, cep) => {
  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) queryParams.append(key, value);
  });
  if (cep) queryParams.append("cep", cep);
  return queryParams.toString();
};

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
  const [appliedFilters, setAppliedFilters] = useState({
    type: "",
    age: "",
    size: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleCepChange = (event) => setInputCep(event.target.value);

  const handleFilterChange = ({ target: { name, value } }) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    setCep(inputCep);
    setAppliedFilters(filters);
  };

  const handleClearFilters = () => {
    setFilters({ type: "", age: "", size: "", gender: "" });
    setAppliedFilters({ type: "", age: "", size: "", gender: "" });
    setInputCep("");
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const queryParams = buildQueryParams(appliedFilters, cep);
        const response = await Api.get(`/animals/list?${queryParams}`);
        setAnimals(response.data);
      } catch (err) {
        console.error("Erro ao buscar animais:", err);
        alert("Animais indisponíveis no momento");
      }
    };

    fetchAnimals();
  }, [cep, appliedFilters]);

  const handleAdoptClick = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  return (
    <div>
      <HeaderContainer>
        <Title>Lista de Animais</Title>
      </HeaderContainer>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "2rem" }}>
        <FilterContainer>
          <Title>Filtros</Title>

          <FilterInput
            id="cep"
            name="cep"
            placeholder="CEP"
            value={inputCep}
            onChange={handleCepChange}
          />

          {["type", "age", "size", "gender"].map((filter) => (
            <FilterSelect
              key={filter}
              id={filter}
              name={filter}
              value={filters[filter]}
              onChange={handleFilterChange}
            >
              <option value="">{filter === "type" ? "Tipo" : filter === "age" ? "Idade" : filter === "size" ? "Tamanho" : "Gênero"}</option>
              {filter === "type" && (
                <>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                  <option value="Ave">Ave</option>
                  <option value="Outro">Outro</option>
                </>
              )}
              {filter === "age" && (
                <>
                  <option value="Filhote">Filhote</option>
                  <option value="Adulto">Adulto</option>
                  <option value="Idoso">Idoso</option>
                </>
              )}
              {filter === "size" && (
                <>
                  <option value="Pequeno">Pequeno</option>
                  <option value="Médio">Médio</option>
                  <option value="Grande">Grande</option>
                </>
              )}
              {filter === "gender" && (
                <>
                  <option value="Macho">Macho</option>
                  <option value="Fêmea">Fêmea</option>
                </>
              )}
            </FilterSelect>
          ))}

          <FilterButton onClick={handleApplyFilters}>Aplicar Filtros</FilterButton>
          <ClearFilter onClick={handleClearFilters}>Limpar Filtros</ClearFilter>
        </FilterContainer>

        <AnimalListContainer>
          {animals.length === 0 ? (
            <p>Nenhum animal encontrado com esses filtros.</p>
          ) : (
            animals.map((animal) => (
              <AnimalCard key={animal.animal_id}>
                <AnimalImage src={animal.animal_picurl} alt={animal.animal_name} />
                <AnimalDetails>
                  <span>{animal.user_name}</span>
                  <h3>{animal.animal_name.split(" ")[0]}</h3>
                  <p>{animal.user_city}, {animal.user_state}</p>
                </AnimalDetails>
                <AnimalFooter gender={animal.animal_gender}>
                  <span className="gender">{animal.animal_gender === "Fêmea" ? "♀" : "♂"}</span>
                  <AdoptButton onClick={() => handleAdoptClick(animal.animal_id)}>Quero adotar</AdoptButton>
                </AnimalFooter>
              </AnimalCard>
            ))
          )}
        </AnimalListContainer>
      </div>
    </div>
  );
};

export default Adopt;
