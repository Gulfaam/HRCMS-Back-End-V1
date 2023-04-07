import leaveRequest from "../models/leaverequest.js";

const hierarchy = {
  getAll: async () => {
    try {
      const data = await leaveRequest.find();
      return { data };
    } catch (error) {
      return { error };
    }
  },

  get: async (id) => {
    try {
      const data = await leaveRequest.findById(id);
      return { data };
    } catch (error) {
      return { data: error.message };
    }
  },

  add: async (body, path) => {
    try {
      console.log(path);
      //*making sure that user on different os can also have the same path(mac,linux)
      path = path.replace(`\\`, `/`);
      const file = {
        leave_type: body.leave_type,
        start_date: body.start_date,
        end_date: body.end_date,
        count: body.count,
        attachment: path,
        reason: body.reason,
      };

      const data = await leaveRequest.create(file);
      return { data };
    } catch (error) {
      return { data: error.message };
    }
  },

  update: async (id, body, path) => {
    try {
      const existReq = await leaveRequest.findById(id);
     console.log('in the service section');
      console.log(path);
      path = path.replace(`\\`, `/`);
      const file = {
        leave_type: body.leave_type || existReq.leave_type,
        start_date: body.start_date || existReq.start_date,
        end_date: body.end_date || existReq.end_date,
        count: body.count || existReq.count,
        attachment: path || existReq.path,
        reason: body.reason || existReq.reason,
      };

      const data = await leaveRequest.findByIdAndUpdate(id, file);
      return { data };
    } catch (error) {
      return { data: error.message };
    }
  },

  delete: async (id) => {
    try {
      const data = await leaveRequest.findByIdAndDelete(id, {
        new: true,
      });
      return { data };
    } catch (error) {
      return { data: error.message };
    }
  },
};

export default hierarchy;
