import { CreateCollectionDto } from "../dtos/collection.dto";
import { createComplectDto } from "../dtos/complect.dto";
import { HttpException } from "../exceptions/HttpException";
import complectModel from "../models/complect.model";
import modelModel from "../models/model.model";
import tissueConfModel from "../models/tissue_conf.model";




class ComplectService {
    private complect = complectModel;
    private tissueConf = tissueConfModel;
    private model = modelModel;

    public getAllComplects() {
        return this.complect.find();
    }

    public async createComplect(complectData: createComplectDto) {
        
        const tissue = await this.tissueConf.findById(complectData.tissue);
        const model = await this.model.findById(complectData.model)

        if(!tissue || !model) throw new HttpException(400,'Model or Tissue NotFound');

        const newComplect = await this.complect.create({
            leg: complectData.leg,
            model: model,
            tissue: tissue,
            collections: complectData.collections
        });

        return newComplect;

    }

    public async AddNewCollection() {
        
    }
}

export default ComplectService;