import { TestService } from './test.service';
import { UpdateTestDto } from './dto/update-test.dto';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    create(createTestDto: any): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateTestDto: UpdateTestDto): string;
    remove(id: number): string;
}
