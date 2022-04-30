import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports :[ 
    ClientsModule.register([
    {
      name : 'FOOD',
      transport : Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'food',
        queueOptions: {
          durable: false
        },
      }
    },
  ]),],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
