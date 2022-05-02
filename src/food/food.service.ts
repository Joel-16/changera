import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { interval, take } from 'rxjs';

@Injectable()
export class FoodService {
  constructor(
    @Inject('ORDER') private readonly mainClient : ClientProxy,
  ){}
  
  async create(createFoodDto) {
    let result = this.mainClient.emit('create-order', createFoodDto)
    return {message : "Successful communication with the ordering microservice"}
  }

  findAll(email) {
    let result = this.mainClient.emit('get-all-orders',email)
    return {message : "Successful communication with the ordering microservice"}
  }

  findOne(id: number) {
    let result = this.mainClient.emit('get-one-order',id)
    return {message : "Successful communication with the ordering microservice"}
  }

  remove(id: number) {
    let result = this.mainClient.emit('delete-order',id)
    return {message : "Successful communication with the ordering microservice"}
  }
}
