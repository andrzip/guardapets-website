import React from 'react';
import { ProfileIcon } from './NavbarStyles';
import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
    const navigate = useNavigate();
    
    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <ProfileIcon onClick={handleProfileClick} />
    );
};

export default ProfileButton;