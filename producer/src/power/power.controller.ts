import { Body, Controller, Post } from '@nestjs/common';
import { PowerDto } from './power.dto';
import { PowerService } from './power.service';

@Controller('power')
export class PowerController {
    constructor(private readonly powerService: PowerService) {}

    @Post()
    async sendPowerValues(@Body() powerDto: PowerDto) {
        return this.powerService.sendPowerValues(powerDto);
    }

}
