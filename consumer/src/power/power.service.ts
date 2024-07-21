import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    async sendPowerValues(data: any) {
        const calcPower = Math.pow(data.baseValue, data.powerValue);
        return calcPower;
    }
}
