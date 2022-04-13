import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/pets/entity/pets.entity';
import { Repository } from 'typeorm';
import { OwnerCreateInput } from './dto/create-owner.input';
import { Owner } from './entity/owner.entity';

@Injectable()
export class OwnerService {
constructor(
    @InjectRepository(Owner)
    private ownerRepository : Repository<Owner>,
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>
){}
    async findAll(): Promise<Owner[]> {
        return this.ownerRepository.find();
    }

    async createOwner(ownerCreateInput: OwnerCreateInput): Promise<Owner> {
        

        let owner = this.ownerRepository.create();
        const { name, pets} = ownerCreateInput;
        owner.name = name
        owner.pets = []
        pets.forEach(async (item) => {
            let pet = await this.petRepository.findOne({where: {id: +item}})
            if(pet){
                owner.pets.push(pet)
            }
        })
        return this.ownerRepository.save(owner)

    }

}
