import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    FoodModule,
    InventoryModule
  ]
})
export class AppModule {}
