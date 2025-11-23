import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { SchedulerModule } from "./scheduler/scheduler.module";
import { AiModule } from "./ai/ai.module";

import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    UserModule,
    // SchedulerModule,
    AiModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes config available globally
      envFilePath: ".env", // Specify your .env file path
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
