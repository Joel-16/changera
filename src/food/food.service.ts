import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { interval, take } from 'rxjs';

@Injectable()
export class FoodService {
  constructor(
    @Inject('ORDER') private readonly mainClient : ClientProxy,
  ){}
  
  async create(createFoodDto) {
    let a = ''
    let result = this.mainClient.emit('create-order', createFoodDto).subscribe(x=>{
      console.log(x)
    })
    console.log(result)
    return result
  }

  findAll(email) {
    let result = this.mainClient.emit('get-all-orders',email)
    return result;
  }

  findOne(id: number) {
    let result = this.mainClient.emit('get-one-order',id)
    return result;
  }

  remove(id: number) {
    let result = this.mainClient.emit('delete-order',id)
    return result;
  }
}
