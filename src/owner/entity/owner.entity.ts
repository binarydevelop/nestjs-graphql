import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Pet } from "src/pets/entity/pets.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('owner')
@ObjectType()
export class Owner {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number

    @Column()
    @Field(type => String)
    name: string;

    @OneToMany(() => Pet, pet => pet.owner)
    @Field(type => [Pet], {
        nullable: true
    })
    pets?: Pet[]
}