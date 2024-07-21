import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://aqrixnqs:BpE-Bp5sQf13ZGa0BDiuKlsIMcRMCPCE@moose.rmq.cloudamqp.com/aqrixnqs'],
        queue: 'power_queue',
        queueOptions: {
          durable: false
        }
      },
    },
  );
  await app.listen();
  console.log("Micro-Service consumer is listening !!");
}
bootstrap();
