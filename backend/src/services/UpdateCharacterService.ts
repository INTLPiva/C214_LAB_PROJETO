import { getRepository } from 'typeorm';

import Character from '../models/Character';

class UpdateCharacterService {
    public async execute(
        name: string,
        age: number,
        avatar: string,
        id: number,
    ): Promise<Character> {
        const charactersRepository = getRepository(Character);

        const character = await charactersRepository.findOne({
            where: { id },
        });

        if (!character) {
            throw new Error('Character to update does not exists!');
        }

        character.name = name;
        character.age = age;
        character.avatar = avatar;

        await charactersRepository.save(character);

        return character;
    }
}

export default UpdateCharacterService;
