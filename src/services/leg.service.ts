import { ILeg } from "../interfaces/leg.interface";
import legModel from "../models/leg.model";





class LegService {
    private leg = legModel;

    public async getAllLeg():Promise<ILeg[]> {
        return await this.leg.find();
    }

    public async createLeg(name: string):Promise<ILeg> {
        const newLeg:ILeg = await this.leg.create({
            name: name
        });

        return newLeg;
    }
}

export default LegService;