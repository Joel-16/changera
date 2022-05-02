import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    create(createFoodDto: CreateFoodDto): Promise<import("rxjs").Observable<any>>;
    findAll(email: string): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
