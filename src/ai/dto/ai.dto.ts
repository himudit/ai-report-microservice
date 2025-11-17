import { IsNotEmpty, IsString } from 'class-validator';

export class AIDto {
    @IsString()
    @IsNotEmpty()
    prompt: string;

    @IsString()
    @IsNotEmpty()
    model: string;
}
