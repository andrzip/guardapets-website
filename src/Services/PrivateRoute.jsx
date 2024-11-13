import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    alert('Você precisa estar logado para acessar esta página!');
    return <Navigate to="/signin" />;
  }

  return children;
};
