import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #234D20;
  height: 3.75rem;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #cacaca;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnSignin = styled(Link)`
  border-radius: 0.25rem;
  background-color: #F0F7DA;
  padding: 0.625rem 1.375rem;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 1.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e6f1be;
  }
`;

export const NavBtnSignup = styled(Link)`
  border-radius: 0.25rem;
  background-color: #C9DF8A;
  padding: 0.625rem 1.375rem;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 1.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #aac268;
  }
`;

export const ProfileIcon = styled(FaUserCircle)`
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`;
