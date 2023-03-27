import EmployeeModel from "../models/Employee.js";

const EmployeeServices = {
    getAll: async () => {
        try {
            const data = await EmployeeModel.find();

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    add: async (body, path) => {
        try {
            console.log("sssssssss")
            console.log(path)
            path = path.replace(`\\`, `/`);
            const file = {
                name: body.name,
                role: body.role,
                contact: body.contact,
                email: body.email,
                address: body.address,
                status: body.status,
                cnic: body.cnic,
                joining_date: body.joining_date,
                ending_date: body.ending_date,
                created_date: body.created_date,
                updated_date: body.updated_date,
                image: path,
                date_of_birth: body.date_of_birth,
                blood_group: body.blood_group,
            };
            // }
            const savedData = await EmployeeModel.create(file);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    update: async (id, body) => {
        try {
            const savedData = await EmployeeModel.findByIdAndUpdate(id, body, { new: true });
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    delete: async (id) => {
        try {
            const savedData = await EmployeeModel.findByIdAndDelete(id);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
};

export default EmployeeServices;
