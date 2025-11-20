// import { Injectable } from "@nestjs/common";
// import { AIProvider } from "./ai-provider.interface";
// import OpenAI from "openai";

// @Injectable()
// export class OpenAIProvider implements AIProvider {
//   private readonly client: OpenAI;

//   constructor() {
//     this.client = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });
//   }

//   async generateResponse(prompt: string): Promise<string> {
//     const response = await this.client.chat.completions.create({
//       model: "gpt-4o",
//       messages: [{ role: "user", content: prompt }],
//     });

//     return response.choices[0].message.content ?? "";
//   }
// }

import { Injectable } from "@nestjs/common";
import { AIProvider } from "./ai-provider.interface";
import Groq from "groq-sdk";

@Injectable()
export class OpenAIProvider implements AIProvider {
  private readonly client: Groq;

  constructor() {
    this.client = new Groq({
      apiKey: process.env.GROQ_API_KEY, // 👈 use GROQ key
    });
  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // 👈 FAST + FREE Groq model
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    return response.choices[0].message?.content || "";
  }
}
