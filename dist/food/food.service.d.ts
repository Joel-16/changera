import { ClientProxy } from '@nestjs/microservices';
export declare class FoodService {
    private readonly mainClient;
    constructor(mainClient: ClientProxy);
    create(createFoodDto: any): Promise<string>;
    findAll(email: any): import("rxjs").Observable<any>;
    findOne(id: number): import("rxjs").Observable<any>;
    remove(id: number): import("rxjs").Observable<any>;
}
