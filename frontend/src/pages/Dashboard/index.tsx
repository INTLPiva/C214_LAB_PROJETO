import React from 'react';

import Menu from '../../components/Menu';
import { BackGround } from './styles';

import backgroundStarWars from '../../assets/backgroundStarWars.jpeg';

const Character: React.FC = () => {
    return (
        <>
            <Menu />
            <BackGround>
                <img src={backgroundStarWars} alt="BackGround" />
                <p>Bem Vindo ao sistema de Star Wars!!!</p>
            </BackGround>
        </>
    );
};

export default Character;
