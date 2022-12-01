import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Characters } from './styles';
import Menu from '../../components/Menu';
import Error from '../../components/Error';

interface Character {
    name: string;
    age: string;
    avatar: string;
    id: number;
}

const CharactersList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        api.get('/characters').then(response => {
            setCharacters(response.data);
        });
    }, []);

    if (characters.length === 0) {
        return <Error title="Não há personagens cadastrados!" />;
    }

    return (
        <>
            <Menu />
            <h1> Lista dos Personagens </h1>
            <Characters>
                {characters.map(character => (
                    <Link
                        key={character.name}
                        to={`/character/${character.id}`}
                    >
                        <img src={character.avatar} alt={character.name} />
                        <div>
                            <strong>{character.name}</strong>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Characters>
        </>
    );
};

export default CharactersList;
