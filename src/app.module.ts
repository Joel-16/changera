import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FoodModule } from './food/food.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    FoodModule,
    InventoryModule
  ],
  controllers : [AppController]
})
export class AppModule {}
