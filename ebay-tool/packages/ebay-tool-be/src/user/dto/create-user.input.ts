import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateUserInput {
    @Field()
    id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    isActive: boolean;
}