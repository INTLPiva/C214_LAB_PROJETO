import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import Menu from '../../components/Menu';
import Error from '../../components/Error';

import { Details } from './styles';

interface CharacterParams {
    id: string;
}

interface CharDescription {
    name: string;
    age: number;
    avatar: string;
}

const Character: React.FC = () => {
    const history = useHistory();

    const { params } = useRouteMatch<CharacterParams>();
    const [character, setCharacter] = useState<CharDescription>();
    const { id } = params;

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        api.get(`/characters/${id}`).then(response => {
            setCharacter(response.data);
        });
    }, []);

    async function handleDelete(): Promise<void> {
        await api.delete(`/character/${id}`);

        // eslint-disable-next-line react-hooks/rules-of-hooks

        history.push('/characters');
    }

    async function handleUpdate(): Promise<void> {
        await api.put(`/character/${id}`, { name, age, avatar });
        history.push('/characters');
    }

    if (character) {
        return (
            <>
                <Menu />
                <h1>Detalhes do Personagem</h1>
                <Details>
                    <div className="details">
                        <img
                            src={character.avatar}
                            alt="Avatar"
                            width={250}
                            height={250}
                        />
                        <div>
                            <p>{character.name}</p>
                            <p>
                                Idade:
                                {character.age}
                            </p>

                            <button type="submit" onClick={handleUpdate}>
                                Editar
                            </button>
                            <button type="submit" onClick={handleDelete}>
                                Deletar
                            </button>
                        </div>
                    </div>
                    <div className="inputs">
                        <p>Nome a ser editado:</p>
                        <input
                            value={name}
                            type="text"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="inputs">
                        <p>Idade a ser editada:</p>
                        <input
                            type="number"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                    <div className="inputs">
                        <p>Avatar a ser editado:</p>
                        <input
                            type="text"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />
                    </div>
                </Details>
            </>
        );
    }

    return (
        <Error title="O personagem que você procurava não foi encontrado!" />
    );
};

export default Character;
