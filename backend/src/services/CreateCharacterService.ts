import { getRepository } from 'typeorm';

import Character from '../models/Character';

interface Request {
    name: string;

    age: number;

    avatar: string;
}

class CreateCharacterService {
    public async execute({ name, age, avatar }: Request): Promise<Character> {
        const chactactersRepository = getRepository(Character);

        const checkCharacterExists = await chactactersRepository.findOne({
            where: { name },
        });

        if (checkCharacterExists) {
            throw new Error('Character already exists!');
        }

        const character = chactactersRepository.create({
            name,
            age,
            avatar,
        });

        await chactactersRepository.save(character);

        return character;
    }
}

export default CreateCharacterService;
