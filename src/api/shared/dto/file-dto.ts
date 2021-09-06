import { ApiProperty } from "@nestjs/swagger";

export class FileDTO {
    @ApiProperty()
    public fileExtension?: string;

    @ApiProperty()
    public fileName?: string;

    @ApiProperty()
    public filekey?: string;

    @ApiProperty()
    public subfolder?: string;

    @ApiProperty()
    public fileSize?: number;

    @ApiProperty()
    public fileType?: string;
    
    @ApiProperty()
    public mimeType?: string;
}