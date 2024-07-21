import { Inject, Injectable } from '@nestjs/common';
import { PowerDto } from './power.dto';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class PowerService {
    constructor(@Inject('POWER_SERVICE') private readonly rabbitClient: ClientProxy) {}

    async sendPowerValues(powerDto: PowerDto) {
        return this.rabbitClient.send({ cmd: 'power_calculate' }, powerDto).pipe(timeout(5000));
    }

    // async sendPowerValues(powerDto: PowerDto) {
    //     // this.rabbtClient.send({cmd: 'power-calculate'}, {powerDto});
    //     console.log("Hi from power service of producer");
    //     this.rabbitClient.emit('power_calculate', powerDto);
    // }
}
