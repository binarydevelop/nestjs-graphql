import { Args, Int, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { type } from 'os';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entity/pets.entity';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService: PetsService){}

    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petService.findAll();
    }

    @Query(returns => Pet)
    findPet(
        @Args('id', {type: () => Int}) id: number,
        @Args('name') name: String
    ): Promise<Pet>{
        return this.petService.findOne(id)
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput: CreatePetInput): Promise<Pet>{
        return this.petService.createPet(createPetInput);
    }


}
