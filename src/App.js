import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Signin from './Routes/Signin';
import Adotar from './Routes/Adotar';
import Doar from './Routes/Doar';
import Parceiros from './Routes/Parceiros';
import Sobre from './Routes/Sobre';
import Profile from './Routes/Profile';

import PrivateRoute from './Components/PrivateRoute/index';

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
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;