import { Field, InputType } from "@nestjs/graphql";
import { Pet } from "src/pets/entity/pets.entity";

@InputType()
export class OwnerCreateInput {
    @Field()
    name: string

    @Field(type => [String], {nullable: true})
    pets: string[]
}