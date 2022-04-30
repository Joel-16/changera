import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
const conn = process.env.CLOUDAMQP_URL || 'amqp://localhost:5672'

@Module({
  imports: [
    ClientsModule.register([
      {
        name : 'INVENTORY',
        transport : Transport.RMQ,
        options: {
          urls: [conn],
          queue: 'inventory',
          queueOptions: {
            durable: false
          },
        }
      },
    ]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService]
})
export class InventoryModule {}
