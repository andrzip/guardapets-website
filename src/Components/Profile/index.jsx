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
  FaEdit,
  FaSave,
  FaSignOutAlt,
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
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [animals, setAnimals] = useState([]);
  const [loadingAnimals, setLoadingAnimals] = useState(true);
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

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = ({ target: { name, value } }) =>
    setProfileData((prev) => ({ ...prev, [name]: value }));

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

  const handleSaveChanges = async () => {
    try {
      await Api.put(`/users/edit/${profileData.user_id}`, profileData, { withCredentials: true });
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
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
            key !== 'user_state' &&
            (key !== 'user_address' ? (
              <InfoGroup key={key}>
                <Label>
                  {iconMap[key]} {labelMap[key] || key.toUpperCase()}
                </Label>
                <Input
                  name={key}
                  value={value || ''}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  type={key === 'user_password' ? 'password' : 'text'}
                />
              </InfoGroup>
            ) : (
              // Campo de endereço com estado incluído
              <InfoGroup key={key}>
                <Label>
                  {iconMap['user_address']} {labelMap['user_address']}
                </Label>
                <Input
                  name="user_address"
                  value={`${profileData.user_address || ''} - ${profileData.user_state.toUpperCase() || ''}`}
                  disabled={!isEditing}
                  readOnly
                />
                {isEditing && (
                  <>
                    <Label>Editar Endereço</Label>
                    <Input
                      name="user_address"
                      value={profileData.user_address || ''}
                      onChange={handleInputChange}
                      placeholder="Endereço"
                    />
                    <Input
                      name="user_state"
                      value={profileData.user_state || ''}
                      onChange={handleInputChange}
                      placeholder="Estado"
                    />
                  </>
                )}
              </InfoGroup>
            ))
          ))}
          <Button onClick={isEditing ? handleSaveChanges : handleEditToggle}>
            {isEditing ? <><FaSave /> Salvar Alterações</> : <><FaEdit /> Editar Dados</>}
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
                onChange={handleInputChange}
                disabled={!isEditing}
                type="email"
              />
            </InfoGroup>
            <InfoGroup>
              <Label>{iconMap['user_phone']} {labelMap['user_phone']}</Label>
              <Input
                name="user_phone"
                value={profileData.user_phone || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                type="tel"
              />
            </InfoGroup>
            <Button>Criar</Button>
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
            {animals.map(animal => (
              <AnimalCard key={animal.animal_id}>
                <img src={animal.animal_picurl} alt={animal.animal_name} />
                <h4>{animal.animal_name}</h4>
                <p>Tipo: {animal.animal_type}</p>
                <p>Idade: {animal.animal_age}</p>
                <p>Tamanho: {animal.animal_size}</p>
                <p>Gênero: {animal.animal_gender}</p>
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
