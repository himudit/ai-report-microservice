import { Injectable } from "@nestjs/common";
import { AIProvider } from "./ai-provider.interface";
import { GoogleGenerativeAI } from "@google/generative-ai";

@Injectable()
export class GeminiProvider implements AIProvider {
  private readonly genAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI("AIzaSyCQCgcB6_mP20lZ35UuG1TEefac4d7NeqU");
  }

  async generateResponse(prompt: string): Promise<string> {
    const model = this.genAI.getGenerativeModel({
      model: (process.env.GEMINI_MODEL as string) || "gemini-1.5-flash",
    });

    const result = await model.generateContent(prompt);
    return result.response.text() ?? "";
  }
}
