import { CreateTissueDto, UpdateTissueFieldsDto } from "../dtos/tissue.dto";
import { HttpException } from "../exceptions/HttpException";
import { ITissue } from "../interfaces/tissue.interface";
import tissueModel from "../models/tissue.model";


class TissueService {
    public tissue = tissueModel;

    public async getAllTissue() {
        return await this.tissue.find().exec();
    }

    public async createTissue(tissueData: CreateTissueDto):Promise<ITissue> {
        const newTissue:ITissue = await this.tissue.create({
            ...tissueData
        })

        return newTissue;
    }

    public async updateMany(tissueData: UpdateTissueFieldsDto) {
        // check id os tissue 
        if(!tissueData.id) throw new HttpException(400,'TissueNotFound');

        const tissue = await this.tissue.findOne({ _id: tissueData.id });

        interface TissueField {
            name?:string
            cost?:number
            price1?:number
            price2?:number
        }

        const update:TissueField = {}

        if(tissueData.name) update.name = tissueData.name
        if(tissueData.cost) update.cost = tissueData.cost
        if(tissueData.price1) update.price1 = tissueData.price1
        if(tissueData.price2) update.price2 = tissueData.price2

        if(!tissue) throw new HttpException(400,'NotFoundTissue');

        // update fields of tissue
        const updatedTissue = await this.tissue.findByIdAndUpdate(
            tissueData.id,
            update, 
            { new: true }
        );

        return updatedTissue;
    }
}


export default TissueService;