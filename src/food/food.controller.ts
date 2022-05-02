import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';

@Controller('order')
export class FoodController {
  constructor(
    private readonly foodService: FoodService
  ) {}

  @Post()
  create(@Body() createFoodDto : CreateFoodDto){
    return this.foodService.create(createFoodDto);
  }

  @Get()
  findAll(@Query('email') email : string) {
    return this.foodService.findAll(email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodService.remove(+id);
  }
}
