import { CreateTissueConfDto } from "../dtos/tissue.dto";
import { HttpException } from "../exceptions/HttpException";
import tissueModel from "../models/tissue.model";
import tissueConfModel from "../models/tissue_conf.model";




class TissueConfSerice {
    private tissueConf = tissueConfModel;
    private tissue = tissueModel;

    public async getAllTissueConf() {
        return await this.tissueConf.find().exec();
    }

    public async createTissueConf(confData:CreateTissueConfDto) {
        const tissue = await this.tissue.findOne({ _id: confData.tissue });

        console.log(tissue)

        if(!tissue) throw new HttpException(400,'TissueNotFound');

        const newConf = await this.tissueConf.create({
            ...confData,
            tissue:tissue
        })

        return newConf;
    }
}


export default TissueConfSerice;