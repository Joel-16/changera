import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    FoodModule,
    InventoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
