import { IsNumber } from 'class-validator'

export class PowerDto {
    @IsNumber()
    baseValue: number

    @IsNumber()
    powerValue: number
}