import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Menu from '../../components/Menu';

import { Form } from './styles';

const CreateChar: React.FC = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [avatar, setAvatar] = useState('');

    async function teste(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        await api.post('/character', { name, age, avatar }).then(response => {
            console.log(response.data);
        });

        history.push('/characters');
    }

    return (
        <>
            <Menu />
            <h1>Adicione um novo personagem</h1>
            <Form onSubmit={teste}>
                <div>
                    <p>Nome do Personagem:</p>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div>
                    <p>Idade do Personagem:</p>
                    <input
                        value={age}
                        type="number"
                        name="age"
                        onChange={e => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <p>Link do Avatar (Foto do Personagem):</p>
                    <input
                        type="text"
                        value={avatar}
                        name="avatar"
                        onChange={e => setAvatar(e.target.value)}
                    />
                </div>
                <button type="submit">Adicionar</button>
            </Form>
        </>
    );
};

export default CreateChar;
