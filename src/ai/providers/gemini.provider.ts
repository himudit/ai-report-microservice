import { Injectable } from "@nestjs/common";
import { AIProvider } from "./ai-provider.interface";
import { GoogleGenerativeAI } from "@google/generative-ai";

@Injectable()
export class GeminiProvider implements AIProvider {
  private readonly genAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing in environment variables");
    }
    this.genAI = new GoogleGenerativeAI(apiKey);

  }

//   async generateResponse(prompt: string): Promise<string> {
//     const model = this.genAI.getGenerativeModel({
//       model: "gemini-1.5-flash-latest",
//     });

//     const result = await model.generateContent(prompt);
//     return result.response.text() ?? "";
//   }
// }

async generateResponse(prompt: string): Promise<string> {
    try {
      // ✅ USE THESE EXACT MODEL NAMES (one at a time):
      
      // Option 1: Most reliable
      const model = this.genAI.getGenerativeModel({ 
        model: "gemini-pro" 
      });
      
      // Option 2: If gemini-pro doesn't work
      // const model = this.genAI.getGenerativeModel({ 
      //   model: "models/gemini-pro" 
      // });
      
      console.log(`Using model: ${model.model}`);
      
      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text() ?? "";
      
    } catch (error) {
      console.error('Gemini API Error Details:', {
        message: error.message,
        status: error.status,
        model: error.config?.model
      });
      throw error;
    }
  }
}