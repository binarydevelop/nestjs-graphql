import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owner/entity/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet{
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field(type => String)
    name: string;

    @ManyToOne(() => Owner, owner => owner.pets)
    @Field(type => Owner, {
        nullable: true
    })
    owner: Owner

    @Column()
    @Field(type => String, {
        nullable: true
    })
    type?: string; 
}