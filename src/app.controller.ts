import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @Get()
  getHello(body){
    return {
        message : "This is a microservice achitecture, it doesn't implement the ordering or inventory services but their services can be migrated quuickly to it",
        routes : ["/order", "inventory"]
    };
  }
}
