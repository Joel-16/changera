import { ClientProxy } from '@nestjs/microservices';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
export declare class InventoryService {
    private readonly mainClient;
    constructor(mainClient: ClientProxy);
    create(createInventoryDto: any): import("rxjs").Observable<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateInventoryDto: UpdateInventoryDto): string;
    remove(id: number): string;
}
