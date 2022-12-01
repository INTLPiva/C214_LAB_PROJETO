import React from 'react';

import starWars from '../../assets/star-wars.svg';

import { MenuStyle } from './styles';

const Menu: React.FC = () => {
    return (
        <MenuStyle>
            <img src={starWars} alt="" />
            <a href="/home">Início</a>
            <a href="/createChar">Criar</a>
            <a href="/characters">Listar</a>
        </MenuStyle>
    );
};

export default Menu;
