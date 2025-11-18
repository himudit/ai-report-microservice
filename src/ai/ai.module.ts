import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";
import { AIFactory } from "./factory/ai.factory";
import { GeminiProvider } from "./providers/gemini.provider";
import { OpenAIProvider } from "./providers/openai.provider";

@Module({
  providers: [AiService, AIFactory, GeminiProvider, OpenAIProvider],
  controllers: [AiController],
})
export class AiModule {}
