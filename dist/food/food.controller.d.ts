import { FoodService } from './food.service';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    create(createFoodDto: any): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFoodDto: UpdateFoodDto): string;
    remove(id: string): string;
}
