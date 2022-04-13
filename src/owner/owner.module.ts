import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entity/owner.entity';
import { Pet } from 'src/pets/entity/pets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Owner, Pet])],
  providers: [OwnerService, OwnerResolver]
})
export class OwnerModule {}
