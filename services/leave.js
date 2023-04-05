import leaveModel from "../models/leave.js";

const leaveservices = {
            add: async (body) => {
                console.log(body);
                try {
                    const savedData = await leaveModel.create(body);
                    if (savedData) {
                        return { message: "success", data: savedData };
                    }
                } catch (error) {
                    return { message: "error", data: error.message };
                }
            },
         
}

export default leaveservices;