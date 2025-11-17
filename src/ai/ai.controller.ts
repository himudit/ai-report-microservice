import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) { }

    @Post()
    getAIresponse(dto: AIDto) {
        const request = new AIRequest(dto.prompt);
        return this.aiService.generateAIresponse(request);
    }
}
