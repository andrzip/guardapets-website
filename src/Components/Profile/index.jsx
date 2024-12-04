import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaKey,
  FaIdCard,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCity,
  FaMapSigns,
  FaMapPin,
  FaSignOutAlt,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import {
  ProfileContainer,
  LayoutGrid,
  Section,
  SectionTitle,
  InfoGroup,
  Label,
  Input,
  Button,
  AvatarContainer,
  AvatarIcon,
  AnimalsList,
  AnimalCard,
  LogoutButton,
} from './ProfileStyles';
import { AuthContext } from '../../Context/AuthContext';
import { Api } from '../../Services/ApiConfig';

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [animals, setAnimals] = useState([]);
  const [loadingAnimals, setLoadingAnimals] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false); // Controle da visibilidade da senha
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: { user: { user_id } } } = await Api.get('/users/verify-token', { withCredentials: true });
        const response = await Api.get(`/users/profile/${user_id}`, { withCredentials: true });

        const { user, animals } = response.data;
        setProfileData(user);
        setAnimals(animals);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoadingAnimals(false);
      }
    };

    fetchProfile();
  }, []);

  const handleMarkAsDonated = async (animalId) => {
    try {
      await Api.put(`/animals/edit/${animalId}`, { animal_avaliable: 0 }, { withCredentials: true });
      setAnimals((prevAnimals) =>
        prevAnimals.filter((animal) => animal.animal_id !== animalId)
      );
      alert('Animal marcado como doado com sucesso!');
    } catch (error) {
      console.error('Erro ao marcar como doado:', error);
      alert('Não foi possível marcar o animal como doado. Tente novamente.');
    }
  };

  const handleLogout = async () => {
    try {
      alert('Saindo...');
      await Api.get('/users/logout', { withCredentials: true });
      logout();
      navigate('/');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  const labelMap = {
    user_name: 'Nome',
    user_email: 'Email',
    user_password: 'Senha',
    user_phone: 'Telefone',
    user_cpf: 'CPF',
    user_birthdate: 'Data de Nascimento',
    user_address: 'Endereço',
    user_city: 'Cidade',
    user_state: 'Estado',
    user_cep: 'CEP',
  };

  const iconMap = {
    user_name: <FaUser />,
    user_email: <FaEnvelope />,
    user_password: <FaKey />,
    user_phone: <FaPhone />,
    user_cpf: <FaIdCard />,
    user_birthdate: <FaCalendarAlt />,
    user_address: <FaMapMarkerAlt />,
    user_city: <FaCity />,
    user_state: <FaMapSigns />,
    user_cep: <FaMapPin />,
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Verificação para garantir que profileData está carregado corretamente
  if (!profileData || Object.keys(profileData).length === 0) {
    return <p>Carregando dados do perfil...</p>;
  }

  return (
    <ProfileContainer>
      <LayoutGrid>
        {/* Coluna da esquerda: Meus Dados */}
        <Section>
          <SectionTitle>Meus Dados</SectionTitle>
          {Object.entries(profileData).map(([key, value]) => (
            key !== 'user_id' &&
            key !== 'user_name' &&
            key !== 'user_email' &&
            key !== 'user_phone' &&
            (key !== 'user_address' ? (
              <InfoGroup key={key}>
                <Label>
                  {iconMap[key]} {labelMap[key] || key.toUpperCase()}
                </Label>
                <Input
                  name={key}
                  value={key === 'user_birthdate' ? formatDate(value) : value || ''}
                  readOnly
                  type={key === 'user_password' && !passwordVisible ? 'password' : 'text'}
                />
              </InfoGroup>
            ) : (
              <InfoGroup key={key}>
                <Label>
                  {iconMap['user_address']} {labelMap['user_address']}
                </Label>
                <Input
                  name="user_address"
                  value={`${profileData.user_address || ''}`}
                  readOnly
                />
              </InfoGroup>
            ))
          ))}
          {/* Botão para alternar a visibilidade da senha */}
          <Button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />} {passwordVisible ? 'Ocultar' : 'Exibir'} Senha
          </Button>
        </Section>

        {/* Coluna da direita: Serviços de Autenticação e Contatos */}
        <div>
          <Section>
            <AvatarContainer>
              <AvatarIcon />
              <h4>Olá, {profileData.user_name || 'Usuário'}</h4>
            </AvatarContainer>
            <LogoutButton onClick={handleLogout}>
              <FaSignOutAlt /> Sair
            </LogoutButton>
          </Section>

          <Section>
            <SectionTitle>Endereços de contato</SectionTitle>
            <InfoGroup>
              <Label>{iconMap['user_email']} {labelMap['user_email']}</Label>
              <Input
                name="user_email"
                value={profileData.user_email || ''}
                readOnly
                type="email"
              />
            </InfoGroup>
            <InfoGroup>
              <Label>{iconMap['user_phone']} {labelMap['user_phone']}</Label>
              <Input
                name="user_phone"
                value={profileData.user_phone || ''}
                readOnly
                type="tel"
              />
            </InfoGroup>
            <Button>Verificar</Button>
          </Section>
        </div>
      </LayoutGrid>

      {/* Seção final: Animais doados */}
      <Section>
        <SectionTitle>Animais doados</SectionTitle>
        {loadingAnimals ? (
          <p>Carregando...</p>
        ) : animals.length > 0 ? (
          <AnimalsList>
            {animals.map((animal) => (
              <AnimalCard key={animal.animal_id}>
                <img src={animal.animal_picurl} alt={animal.animal_name} />
                <h4>{animal.animal_name}</h4>
                <p>Tipo: {animal.animal_type}</p>
                <p>Idade: {animal.animal_age}</p>
                <p>Tamanho: {animal.animal_size}</p>
                <p>Gênero: {animal.animal_gender}</p>
                <Button onClick={() => handleMarkAsDonated(animal.animal_id)}>
                  Já foi adotado!
                </Button>
              </AnimalCard>
            ))}
          </AnimalsList>
        ) : (
          <p>Você ainda não doou nenhum animal.</p>
        )}
      </Section>
    </ProfileContainer>
  );
};

export default Profile;
