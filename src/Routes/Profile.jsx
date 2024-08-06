import { React, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const sair = () => {
    logout();
    alert("Você saiu da conta!");
    navigate("/");
  }

  return (
    <>
      <p>Profile</p>
      <button onClick={sair}>Sair da Conta</button>
    </>
  )
}

export default Profile