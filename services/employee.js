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

    getOne: async (id) => {
        try {
            const data = await EmployeeModel.findById(id);

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

    add: async (body, path) => {
        try {
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
                probation_period: body.probation_period
            };
            const savedData = await EmployeeModel.create(file);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    update: async (id, body, path) => {
        try {
            const existingEmployee = await EmployeeModel.findById(id);

            if (!existingEmployee) {
                return { message: "error", existingEmployee };
            }
            if (path) {
                path = path.replace(`\\`, `/`);
            }
            const file = {
                name: body.name || existingEmployee.name,
                role: body.role || existingEmployee.role,
                contact: body.contact || existingEmployee.contact,
                email: body.email || existingEmployee.email,
                address: body.address || existingEmployee.address,
                status: body.status || existingEmployee.status,
                cnic: body.cnic || existingEmployee.cnic,
                joining_date: body.joining_date || existingEmployee.joining_date,
                ending_date: body.ending_date || existingEmployee.ending_date,
                created_date: body.created_date || existingEmployee.created_date,
                updated_date: body.updated_date || existingEmployee.updated_date,
                image: path || existingEmployee.image,
                date_of_birth: body.date_of_birth || existingEmployee.date_of_birth,
                blood_group: body.blood_group || existingEmployee.blood_group,
                probation_period:body.probation_period || existingEmployee.probation_period
            };
            const savedData = await EmployeeModel.findByIdAndUpdate(id, file, { new: true });
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
