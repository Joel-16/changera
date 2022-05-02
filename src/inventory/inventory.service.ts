import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @Inject('INVENTORY') private readonly mainClient : ClientProxy,
  ){}
  create(createInventoryDto) {
    this.mainClient.emit(
      'inventory',
      createInventoryDto
    )
    return {message : "Successful communication with the inventory microservice"}
  }

  findAll() {
    return {message : "Successful communication with the inventory microservice"}
  }

  findOne(id: number) {
    return {message : "Successful communication with the inventory microservice"}
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return {message : "Successful communication with the inventory microservice"}
  }

  remove(id: number) {
    return {message : "Successful communication with the inventory microservice"}
  }
}
