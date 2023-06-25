import { CreateConfDto } from "../dtos/conf.dto";
import configModel from "../models/config.model";



class ConfigService {
    public configs = configModel;




    public async getAllConfigs() {

        return await this.configs.find().populate('model').exec()
    }

    public async createNewConf(confData:CreateConfDto) {
        return await this.configs.create({
            ...confData
        })
    }

    public async updateConf() {
        
    }

}


export default ConfigService;