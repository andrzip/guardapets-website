import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './Routes/HomeRoute';
import Signup from './Routes/SignupRoute';
import Signin from './Routes/SigninRoute';
import Adotar from './Routes/AdoptRoute';
import Doar from './Routes/DonateRoute';
import Parceiros from './Routes/PartnersRoute';
import Ajuda from './Routes/HelpRoute';
import Perfil from './Routes/ProfileRoute';
import Admin from './Routes/AdminRoute';
import Contato from './Routes/ContactRoute';
import { PrivateRoute } from './Services/PrivateRoute';

import Navbar from './Components/Navbar/index';
import { AuthProvider } from './Context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/adotar" element={<Adotar />} />
        <Route path="/doar" element={<PrivateRoute><Doar /></PrivateRoute>} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/profile" element={<PrivateRoute><Perfil /></PrivateRoute>} />
        <Route path="/animal/:id" element={<PrivateRoute><Contato /></PrivateRoute>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;