import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }

  //inject user repository
  constructor( @InjectRepository(User) private userRepository:Repository<User>){

  } 
  create(createUserDto: CreateUserDto):Promise<User>{
    let user:User=new User();
    user.firstName=createUserDto.firstName;
    user.lastName=createUserDto.lastName;
    user.age=createUserDto.age;
    
    return this.userRepository.save(user);
  }

  findAll() :Promise<User[]>{
    return this.userRepository.find()
  }


  // findOne(id:number) {
  // return this.userRepository.findOne(id)
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user:User=new User();
    user.firstName=updateUserDto.firstName;
    user.lastName=updateUserDto.lastName;
    user.age=updateUserDto.age;
    user.id=id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
}
