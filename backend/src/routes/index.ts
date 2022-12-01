import { Router } from 'express';
import { getRepository } from 'typeorm';

import Character from '../models/Character';

import CreateCharacterService from '../services/CreateCharacterService';
import DeleteCharacterService from '../services/DeleteCharacterService';
import UpdateCharacterService from '../services/UpdateCharacterService';

const routes = Router();

routes.get('/characters', async (request, response) => {
    try {
        const charactersRepository = getRepository(Character);

        const characters = await charactersRepository.find();

        return response.json(characters);
    } catch (error) {
        return response.json(error.message);
    }
});

routes.get('/characters/:id', async (request, response) => {
    const { id } = request.params;

    const charactersRepository = getRepository(Character);

    const character = await charactersRepository.findOne({
        where: { id },
    });

    return response.json(character);
});

routes.post('/character', async (request, response) => {
    try {
        const { name, age, avatar } = request.body;

        const createCharacter = new CreateCharacterService();

        const character = await createCharacter.execute({ name, age, avatar });

        return response.json(character);
    } catch (error) {
        return response.json(error.message);
    }
});

routes.put('/character/:id', async (request, response) => {
    try {
        const { name, age, avatar } = request.body;
        const { id } = request.params;

        const characterId = Number(id);

        const updateCharacter = new UpdateCharacterService();

        const character = await updateCharacter.execute(
            name,
            age,
            avatar,
            characterId,
        );

        return response.json(character);
    } catch (error) {
        return response.json(error.message);
    }
});

routes.delete('/character/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const characterId = Number(id);

        const deleteCharacter = new DeleteCharacterService();

        await deleteCharacter.execute(characterId);

        return response.status(204).send();
    } catch (error) {
        return response.json(error.message);
    }
});

export default routes;
