import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnSignin,
    NavBtnSignup
} from './NavbarStyles';
import ProfileButton from './ProfileButton.jsx';

const Navbar = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src="https://i.ibb.co/Lpb5x7x/image.png" alt="icon" width={"32px"}/>
                </NavLink>
                <Bars /> 
                <NavMenu>
                    <NavLink to='/adotar' activeStyle>
                        Quero adotar
                    </NavLink>
                    <NavLink to='/doar' activeStyle>
                        Quero doar
                    </NavLink>
                    <NavLink to='/parceiros' activeStyle>
                        Parceiros
                    </NavLink>
                    <NavLink to='/sobre' activeStyle>
                        Sobre
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    {isAuthenticated ? (
                        <ProfileButton />
                    ) : (
                        <>
                            <NavBtnSignin to='/signin'>Login</NavBtnSignin>
                            <NavBtnSignup to='/signup'>Cadastro</NavBtnSignup>
                        </>
                    )}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;