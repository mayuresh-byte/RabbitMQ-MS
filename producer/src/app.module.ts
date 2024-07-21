import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PowerController } from './power/power.controller';
import { PowerService } from './power/power.service';
import { PowerModule } from './power/power.module';

@Module({
  imports: [PowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
