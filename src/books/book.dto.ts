import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class BookDto {
    @IsInt()
    readonly id: number;
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @ApiProperty({ type: Number, description: 'id của cửa sách' })
    readonly title: string;
    @IsString()
    @MinLength(1)
    @MaxLength(50)
    @ApiProperty({ type: String, description: 'Tên môn học' })
    readonly subject: string;
    @IsInt()
    @ApiProperty({ type: Number, description: 'giá tiền của sách' })
    readonly price: number;
    @IsInt()
    @ApiProperty({ type: Number, description: 'id của cửa hàng' })
    readonly store_id: number;
}