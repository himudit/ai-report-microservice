import { Module } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";
import { AIFactory } from "./factory/ai.factory";
import { GeminiProvider } from "./providers/gemini.provider";
import { OpenAIProvider } from "./providers/openai.provider";
import { GroqAIProvider } from "./providers/groq.provider.interface";

@Module({
  providers: [
    AiService,
    AIFactory,
    GeminiProvider,
    OpenAIProvider,
    GroqAIProvider,
  ],
  controllers: [AiController],
})
export class AiModule {}
