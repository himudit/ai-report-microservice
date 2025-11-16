main.ts loads first
In main.ts 
Nest creates a server and loads AppModule & enable validation

app.module.ts gets loaded 
gets all feature Modules

Nest loads each Module
ex -> UserModule
controller -> DTO Validation -> service -> repository -> Domain Class -> DataBase/Response
Handles dependency injection

