import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [UserModule, SchedulerModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
