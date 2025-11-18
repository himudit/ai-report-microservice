import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return `running on ${process.env.PORT}`;
  }
}
