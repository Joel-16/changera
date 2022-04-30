"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModule = void 0;
const common_1 = require("@nestjs/common");
const food_service_1 = require("./food.service");
const food_controller_1 = require("./food.controller");
const microservices_1 = require("@nestjs/microservices");
let FoodModule = class FoodModule {
};
FoodModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'FOOD',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'food',
                        queueOptions: {
                            durable: false
                        },
                    }
                },
            ]),
        ],
        controllers: [food_controller_1.FoodController],
        providers: [food_service_1.FoodService]
    })
], FoodModule);
exports.FoodModule = FoodModule;
//# sourceMappingURL=food.module.js.map