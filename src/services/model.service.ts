import { AddCollectionDto, CreateModelDto } from "../dtos/model.dto";
import { HttpException } from "../exceptions/HttpException";
import { IModel } from "../interfaces/model.interface";
import branchModel from "../models/branch.model";
import ftypeModel from "../models/ftype.model";
import modelModel from "../models/model.model";





class ModelService {
    public models = modelModel;
    public ftype = ftypeModel;
    public company = branchModel;


    public async getAllModels() {
        return await this.models.find().exec();
    }


    public async getModelPagination(page:number,size:number) {
        const skip = (page - 1) * size;

        const models = await this.models.find()
                .skip(skip)
                .limit(size)
                .populate('type')
                .exec()

        const totalModels = await this.models.countDocuments().exec();
        const totalPages = totalModels/size;

        return {
            models,
            totalModels,
            totalPages,
            modelsOnPage:models
        }
    }


    public async createModel(modelData:CreateModelDto):Promise<IModel> {
        
        const type = await this.ftype.findOne({ _id: modelData.type });
        const org = await this.company.findOne({ _id: modelData.org });

        if(!type || !org) throw new HttpException(400,'org or furniture type not found');

        const newModel = await this.models.create({
            ...modelData
        })

        return newModel;
    }

    public async getByType(ftype:string) {
        console.log(ftype)
        return await this.models.find({
            type: ftype
        });
    }

    // Add Conf to Model
    public async addConf(confData:AddCollectionDto) {
        
    }
}


export default ModelService;