"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryModule = void 0;
const common_1 = require("@nestjs/common");
const inventory_service_1 = require("./inventory.service");
const inventory_controller_1 = require("./inventory.controller");
const microservices_1 = require("@nestjs/microservices");
const conn = process.env.CLOUDAMQP_URL || 'amqp://localhost:5672';
let InventoryModule = class InventoryModule {
};
InventoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'INVENTORY',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [conn],
                        queue: 'inventory',
                        queueOptions: {
                            durable: false
                        },
                    }
                },
            ]),
        ],
        controllers: [inventory_controller_1.InventoryController],
        providers: [inventory_service_1.InventoryService]
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventory.module.js.map