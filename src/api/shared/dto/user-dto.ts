import { ApiProperty } from "@nestjs/swagger";


export class UserDTO {

    @ApiProperty()
    public id?: number;
    
    @ApiProperty()
    public tenant_id?: number;

    @ApiProperty()
    public full_name?: string;

    @ApiProperty()
    public user_name?: string;

    @ApiProperty()
    public email_address?: string;

    @ApiProperty()
    public phone_number?: string;

    @ApiProperty()
    public password?: string;
    
    @ApiProperty()
    public portal_id?: string;
}