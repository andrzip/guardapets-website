import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    alert('Você precisa estar logado para acessar esta página!');	
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;