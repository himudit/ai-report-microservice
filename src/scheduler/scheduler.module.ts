import { Module } from "@nestjs/common";
import { SchedulerService } from "./scheduler.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    ScheduleModule.forRoot(), // <-- required to start cron jobs
  ],
  providers: [SchedulerService, ScheduleModule],
})
export class SchedulerModule {}
