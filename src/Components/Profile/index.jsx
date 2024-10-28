import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  ProfileContainer,
  ProfileTitle,
  InfoGroup,
  Label,
  Input,
  EditButton,
  LogoutButton,
} from './ProfileStyles';
import { AuthContext } from '../../Context/AuthContext';
import { Api } from '../../Services/ApiConfig';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout: signOut } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data: { user: { user_id } } } = await Api.get('/users/verify-token', { withCredentials: true });
        const { data } = await Api.get(`/users/profile/${user_id}`, { withCredentials: true });

        if (!data || Object.keys(data).length === 0) {
          throw new Error('Nenhum dado de perfil encontrado');
        }

        setProfileData(data[0]);
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        alert('Erro ao carregar os dados do perfil');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(prev => !prev);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSignOut = () => {
    alert('Saindo...');
    Cookies.remove('accessToken');
    signOut();
    navigate('/');
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await Api.put(`/users/edit/${profileData.user_id}`, profileData, { withCredentials: true });
      alert(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Erro ao atualizar os dados do perfil');
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <ProfileContainer>
      <ProfileTitle>Perfil do Usuário</ProfileTitle>
      {Object.entries(profileData).map(([field, value]) => (
        field !== 'user_id' && (
          <InfoGroup key={field}>
            <Label>{field.replace('user_', '').replace('_', ' ').toUpperCase()}</Label>
            <Input
              type={field === 'user_password' ? 'password' : 'text'}
              name={field}
              value={value || ''}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </InfoGroup>
        )
      ))}
      <EditButton onClick={isEditing ? handleUpdateProfile : handleEditToggle}>
        {isEditing ? 'Salvar Alterações' : 'Editar Perfil'}
      </EditButton>
      <LogoutButton onClick={handleSignOut}>Sair</LogoutButton>
    </ProfileContainer>
  );
};

export default Profile;
