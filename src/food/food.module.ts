import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
const conn = process.env.CLOUDAMQP_URL || 'amqp://localhost:5672'

@Module({
  imports :[ 
    ClientsModule.register([
    {
      name : 'ORDER',
      transport : Transport.RMQ,
      options: {
        urls: [conn],
        queue: 'order',
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
