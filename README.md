npm run start:dev
nest g module scheduler
nest g service scheduler
pnpm lint --fix

main.ts loads first
In main.ts 
Nest creates a server and loads AppModule & enable validation

app.module.ts gets loaded 
gets all feature Modules

Nest loads each Module
example -> UserModule
controller -> DTO Validation -> service -> repository -> Domain Class -> DataBase/Response
Handles dependency injection

NestJS uses DI Container to automatically create objects for us.
after main.ts when we come to app.module.ts
here NestJS sees providers & create objects
here NestJS sees controllers & create controller objects

Cron -> EmailService -> EmailFactory -> EmailProvider -> Send Email

Email
 ├── to: string
 ├── subject: string
 ├── body: string
 └── send() maybe defined by provider

src/
 └── ai/
      ├── ai.module.ts                    <----register
      ├── ai.controller.ts                
      ├── ai.service.ts                   <---- contains logic, create AIRequest objects, choose correct provider via factory
      │
      ├── domain/
      │     └── ai-request.class.ts       <-- OOP domain model, Encapsulates AI request data (prompt, model, options)
      │
      ├── providers/
      │     ├── ai-provider.interface.ts  <-- strategy interface
      │     ├── openai.provider.ts        <-- concrete provider, Actually calls OpenAI API, Converts AIRequest → API request, Returns AI output
      |     └── gemini.provider.ts        <-- concrete provider, Actually calls Gemini API, Converts AIRequest → API request, Returns AI output
      │
      ├── factory/
      │     └── ai.factory.ts             <-- abstract factory, Decides which AI provider to create, Handles object creation; service does NOT create objects
      │
      ├── dto/
      │     └── ai.dto.ts                 <-- request DTO, Defines what input API accepts, Adds validation rules (class-validator), Prevents invalid data (empty prompt, wrong types)


FULL EXECUTION EXPLIANED :
STEP 1
controller - post/ai/ask { "prompt": "Write monthly expense summary" }
controller validates DTO & call aiService

STEP 2
AIService build domain object

STEP 3
AIService asks Factory for Provider ex->GeminiProvider

STEP 4
GeminiProvider generates AI output

STEP 5
Controller recives output