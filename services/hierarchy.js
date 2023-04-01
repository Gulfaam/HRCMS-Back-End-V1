import hierarchyModel from "../models/Hierarchy.js";

const hierarchySerive = {
    add: async (body) => {
        try {
          const savedData = await hierarchyModel.create(body);
          if (savedData) {
            return { message: "success", data: savedData };
          }
        } catch (error) {
          return { message: "error", data: error.message };
        }
      },
    }

export default hierarchySerive;