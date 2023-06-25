import { CreateStaffDto } from "../dtos/staff.dto";
import staffModel from "../models/staff.model";





class StaffService {
    public staff = staffModel;

    public async createUserStaff(staffData:CreateStaffDto) {

        const staff = await this.staff.create({
            ...staffData
        })

        return staff;
    }
}


export default StaffService;