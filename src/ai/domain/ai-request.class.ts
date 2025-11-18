export class AIRequest {
  constructor(
    private readonly prompt: string,
    private readonly model: string,
  ) {}

  getPrompt(): string {
    return this.prompt;
  }

  getModel(): string {
    return this.model;
  }
}
