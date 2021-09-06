import { ApiProperty } from "@nestjs/swagger";


export class SigninDTO {

    @ApiProperty()
    user_name?: string;

    @ApiProperty()
    password?: string;

    @ApiProperty()
    updated_ip: string;
}