import { createConnection, getConnection, getRepository } from 'typeorm';
import Character from '../models/Character';
import CreateCharacterService from './CreateCharacterService';

let createCharacter: CreateCharacterService;

describe('Create Character', () => {
    beforeEach(() => {
        createCharacter = new CreateCharacterService();
        return createConnection({
            type: 'postgres',
            host: 'kesavan.db.elephantsql.com',
            port: 5432,
            username: 'ieoctjrf',
            password: 'fw6Hs9PkIOCLWoxO9tB8ZRmgzEJTkMbe',
            database: 'ieoctjrf',
            entities: [Character],
        });
    });

    afterEach(() => {
        const conn = getConnection();
        return conn.close();
    });

    it('should be able to create a character', async () => {
        const character = {
            name: 'Lucas',
            age: 21,
            avatar: 'Teste',
        };

        const characterCreated = await createCharacter.execute(character);

        expect(characterCreated).toHaveProperty('id');
    });

    it('should be able to find the characters', async () => {
        const characters = await getRepository(Character).find();

        expect(characters).not.toBe([]);
    });

    it('should be able to delete a character', async () => {
        const characterToDelete = await getRepository(Character).findOne({
            where: { name: 'Lucas' },
        });

        if (characterToDelete) {
            await getRepository(Character).remove(characterToDelete);
        }

        const characterDeleted = await getRepository(Character).findOne({
            where: { name: 'Lucas' },
        });

        expect(characterDeleted).toBe(undefined);
    });
});
