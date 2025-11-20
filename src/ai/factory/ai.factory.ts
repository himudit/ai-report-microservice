import { Injectable } from "@nestjs/common";
import { AIProvider } from "../providers/ai-provider.interface";
import { GeminiProvider } from "../providers/gemini.provider";
import { OpenAIProvider } from "../providers/openai.provider";
import { GroqAIProvider } from "../providers/groq.provider.interface";

@Injectable()
export class AIFactory {
  constructor(
    private readonly geminiProvider: GeminiProvider,
    private readonly openAIProvider: OpenAIProvider,
    private readonly groqAIProvider: GroqAIProvider,
  ) {}

  getProvider(model: string): AIProvider {
    switch (model.toLowerCase()) {
      case "gemini":
        return this.geminiProvider;

      case "openai":
        return this.openAIProvider;

      case "groq":
        return this.openAIProvider;

      default:
        throw new Error(`Unsupported AI model: ${model}`);
    }
  }
}
