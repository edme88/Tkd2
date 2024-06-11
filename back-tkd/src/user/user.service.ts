/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login_dto';
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    getAll(){
        return this.usersRepository.find();
    }

    async createUser(user){
        console.log(user);
        user.password = bcrypt.hashSync(user.password, 1);
        console.log(user);
        const result = await this.usersRepository.insert(user);
        console.log(result);
        return result;
    }

    async modifyUser(id, newBody){
        const result = await this.usersRepository.update(id, newBody);
        return result;
    }

    async deleteUser(id){
        console.log(id);
        const result = await this.usersRepository.delete(id);
        let text, deleted;
        if(result["affected"]===0){
            text = `No existe el id ${id} de usuario para eliminar`;
            deleted = false;
        }else{
            text = `Se eliminó el usuario de id: ${id}`;
            deleted = true;
        }
        return {"response":text,"deleted":deleted};
    }

    async loginUser(user: LoginDTO){
        const userName = user.username;
        const password = user.password;

        const userData = await this.usersRepository.findOneBy({"username": userName});

        if(userData === null){
            return {"autenticated": false, "msg": "El usuario NO existe"};
        }
        
        if(bcrypt.compareSync(password, userData.password)){
            return {"autenticated": true, "msg": "El usuario se logueo exitosamente"};
        }else{
            return {"autenticated": false, "msg": "El usuario no puede loguearse"};
        }
    }
}
