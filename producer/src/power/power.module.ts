import { Module } from '@nestjs/common';
import { PowerController } from './power.controller';
import { PowerService } from './power.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [PowerModule, ClientsModule.register([
        {
          name: 'POWER_SERVICE',
          transport: Transport.RMQ,
          options: {
            urls: ['amqps://aqrixnqs:BpE-Bp5sQf13ZGa0BDiuKlsIMcRMCPCE@moose.rmq.cloudamqp.com/aqrixnqs'],
            queue: 'power_queue',
            queueOptions: {
              durable: false
            },
          },
        },
      ]),],
    controllers: [PowerController],
    providers: [PowerService],
})

export class PowerModule {}