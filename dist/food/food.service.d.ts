import { ClientProxy } from '@nestjs/microservices';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodService {
    private readonly mainClient;
    constructor(mainClient: ClientProxy);
    create(createFoodDto: any): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFoodDto: UpdateFoodDto): string;
    remove(id: number): string;
}
