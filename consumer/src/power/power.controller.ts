import { Body, Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, RmqContext } from '@nestjs/microservices';
import { PowerService } from './power.service';

@Controller('power')
export class PowerController {
    constructor(private readonly powerService: PowerService) {}

    @MessagePattern({cmd: 'power_calculate'})
    async sendPowerValues(@Body() data, @Ctx() context: RmqContext) {
        return this.powerService.sendPowerValues(data);
    }

    // @EventPattern('power_calculate')
    // async sendPowerValues(data: any) {
    //     console.log("Hi");
    //     return this.powerService.sendPowerValues(data);
    // }
}
