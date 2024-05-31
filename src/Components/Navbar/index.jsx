import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnSignin,
    NavBtnSignup
} from './NavbarStyles';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    [LOGO]
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
                    <NavBtnSignin to='/signin'>Login</NavBtnSignin>
                    <NavBtnSignup to='/signup'>Cadastro</NavBtnSignup>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;