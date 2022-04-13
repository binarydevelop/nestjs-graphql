import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entity/pets.entity';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet)
        private petRepository: Repository<Pet>
    ){}

    async createPet(createPetInput: CreatePetInput): Promise<Pet>{
        const newPet = this.petRepository.create(createPetInput);
        return this.petRepository.save(newPet);
    }

    async findAll(): Promise<Pet[]> {
        return this.petRepository.find();
    }

    async findOne(id: number): Promise<Pet> {
        let foundPet = await this.petRepository.findOneOrFail({where: {id}})
        return foundPet;
    }
}
