import { Injectable } from '@nestjs/common';
import { AIRequest } from './domain/ai-request.class'
import { AIFactory } from './factory/ai.factory';

@Injectable()
export class AiService {
    constructor(private readonly aiFactory: AIFactory) { }

    async generateAIResponse(request: AIRequest){
        const provider = this.aiFactory.
    }
}
