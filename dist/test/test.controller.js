"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const test_service_1 = require("./test.service");
const update_test_dto_1 = require("./dto/update-test.dto");
let TestController = class TestController {
    constructor(testService) {
        this.testService = testService;
    }
    create(createTestDto) {
        console.log(createTestDto);
        return this.testService.create(createTestDto);
    }
    findAll() {
        return this.testService.findAll();
    }
    findOne(id) {
        return this.testService.findOne(id);
    }
    update(updateTestDto) {
        return this.testService.update(updateTestDto.id, updateTestDto);
    }
    remove(id) {
        return this.testService.remove(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('createTest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllTest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOneTest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('updateTest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_test_dto_1.UpdateTestDto]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('removeTest'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestController.prototype, "remove", null);
TestController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=test.controller.js.map