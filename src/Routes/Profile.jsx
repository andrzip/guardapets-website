import { React, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigation = useNavigate();
  const { logout: signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    Cookies.remove('accessToken');
    signOut();
    navigation('/');
  };

  return (
    <>
      <p>Profile</p>
      <button onClick={handleSignOut}>Log out</button>
    </>
  );
};

export default Profile