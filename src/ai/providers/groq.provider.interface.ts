import { Injectable } from "@nestjs/common";
import { AIProvider } from "./ai-provider.interface";
import Groq from "groq-sdk";

@Injectable()
export class GroqAIProvider implements AIProvider {
  private readonly client: Groq;

  constructor() {
    this.client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return response.choices[0].message?.content || "";
  }
}
