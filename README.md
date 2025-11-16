npm run start:dev
nest g module scheduler
nest g service scheduler

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
