import { isEmpty } from "class-validator";
import { LoginDto } from "../dtos/user.dto";
import userModel from "../models/user.model";
import { HttpException } from "../exceptions/HttpException";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";




class AuthService {
   public users = userModel;

   public async login(userData:LoginDto) {
      if (isEmpty(userData)) throw new HttpException(400, "You're not userData");
      const user = await this.getByContact(userData.contact);

      // if(user) throw new HttpException(400,'user not found');

      const isMatched = await compare(userData.password, user.password);

      console.log(isMatched);

      if(!isMatched) throw new HttpException(400,'password is wrong');

      return sign(user.toJSON(),'SECRET_KEY');
   }

   public async getByContact( contact: string ) {

      const user = await this.users.findOne({ phone_number: contact });

      if(!user) throw new HttpException(400, 'user not found');
      return user;
   }
}

export default AuthService;