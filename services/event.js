import EventModel from "../models/event.js";

const EventService = {
  add: async (body) => {
    try {
      const savedData = await EventModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAll: async () => {
    try {
      const data = await EventModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getById: async (id) => {
    try {
      const data = await EventModel.findById(id);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  updateById: async (id, body) => {
    try {
      let data = await EventModel.findOneAndUpdate(id, body);
      data = await EventModel.findById(id); // to show the updated data
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  deleteById: async (id) => {
    try {
      const data = await EventModel.findByIdAndDelete(id);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default EventService;
