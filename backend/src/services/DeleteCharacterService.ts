import { getRepository } from 'typeorm';

import Character from '../models/Character';

class DeleteCharacterService {
    public async execute(id: number): Promise<void> {
        const chactactersRepository = getRepository(Character);

        const checkCharacterExists = await chactactersRepository.findOne({
            where: { id },
        });

        if (!checkCharacterExists) {
            throw new Error('Character does not exists!');
        }

        const character = checkCharacterExists;

        await chactactersRepository.remove(character);
    }
}

export default DeleteCharacterService;
