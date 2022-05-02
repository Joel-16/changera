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
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let FoodService = class FoodService {
    constructor(mainClient) {
        this.mainClient = mainClient;
    }
    async create(createFoodDto) {
        let result = this.mainClient.emit('create-order', createFoodDto);
        console.log(result);
        return result;
    }
    findAll(email) {
        let result = this.mainClient.emit('get-all-orders', email);
        return result;
    }
    findOne(id) {
        let result = this.mainClient.emit('get-one-order', id);
        return result;
    }
    remove(id) {
        let result = this.mainClient.emit('delete-order', id);
        return result;
    }
};
FoodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ORDER')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], FoodService);
exports.FoodService = FoodService;
//# sourceMappingURL=food.service.js.map