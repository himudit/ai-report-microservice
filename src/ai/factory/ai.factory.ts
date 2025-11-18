import { Injectable } from "@nestjs/common";
import { AIProvider } from "../providers/ai-provider.interface";
import { GeminiProvider } from "../providers/gemini.provider";
import { OpenAIProvider } from "../providers/openai.provider";
// Later you can add: import { OpenAIProvider } ...

@Injectable()
export class AIFactory {
  constructor(
    private readonly geminiProvider: GeminiProvider,
    // private readonly openAIProvider: OpenAIProvider,
    // add new providers here in future
  ) {}

  getProvider(model: string): AIProvider {
    switch (model.toLowerCase()) {
      case "gemini":
        return this.geminiProvider;

      // case "openai":
      //   return this.openAIProvider;

      default:
        throw new Error(`Unsupported AI model: ${model}`);
    }
  }
}
