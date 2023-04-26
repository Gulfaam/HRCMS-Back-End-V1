import leavetabel from "../models/leavetable.js";

const leavetable = {
  getAll: async (limit,skip) => {
    try {
      const data = await leavetabel.find().limit(limit).skip(skip);
      return { data };
    } catch (error) {
      return { error };
    }
  },

  get: async (id) => {
    try {
      const data = await leavetabel.findById(id);
      return { data };
    } catch (error) {
      return {data: error.message};
    }
  },
  getbyType: async (type) => {
    try {
      const data = await leavetabel.find(type);
      return { data };
    } catch (error) {
      return {data: error.message};
    }
  },

    getbyfiltration: async (pending) => {
    try { 
     const data = await leavetabel.find(pending);
      return { data };
    } catch (error) {
      return {data: error.message};
    }
  },

  add: async (body) => {
    try {
      const data = await leavetabel.create(body);
      return {data};
    } catch (error) {
      return { data: error.message };
    }
  },
};

export default leavetable;