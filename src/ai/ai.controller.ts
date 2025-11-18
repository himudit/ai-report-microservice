import { Body, Controller, Post } from "@nestjs/common";
import { AiService } from "./ai.service";
import { AIDto } from "./dto/ai.dto";
import { AIRequest } from "./domain/ai-request.class";

@Controller("ai")
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post()
  getAiResponse(@Body() dto: AIDto) {
    const request = new AIRequest(dto.prompt, dto.model);
    return this.aiService.generateAIResponse(request);
  }
}
