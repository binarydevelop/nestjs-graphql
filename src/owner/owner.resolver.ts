import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { PetsService } from 'src/pets/pets.service';
import { OwnerCreateInput } from './dto/create-owner.input';
import { Owner } from './entity/owner.entity';
import { OwnerService } from './owner.service';

@Resolver()
export class OwnerResolver {
    constructor(private ownerService: OwnerService){}

    @Query(returns => [Owner] )
    owners() : Promise<Owner[]> {
        return this.ownerService.findAll();
    }
    
    @Mutation(returns => Owner)
    createOwner(@Args('createOwnerInput') createOwnerInput: OwnerCreateInput): Promise<Owner> {
        return this.ownerService.createOwner(createOwnerInput);
    }
}
