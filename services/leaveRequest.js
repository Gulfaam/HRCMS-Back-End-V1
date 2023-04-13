import leaveRequest from "../models/leaveRequest.js";

const leaveRequests = {
  getAll: async () => {
    try {
      const data = await leaveRequest.find();
      return { data };
    } catch (error) {
      return { error };
    }
  },

  getOnebyId: async (id) => {
    try {
      const data = await leaveRequest.findById(id);
      return { data };
    } catch (error) {
      return { data: error.message };
    }
  },

  add: async (body, path) => {
    try {
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

  updateOneById: async (id, body, path) => {
    try {
      const existReq = await leaveRequest.findById(id);
      path = path.replace(`\\`, `/`);
      const file = {
        leave_type: body.leave_type || existReq.leave_type,
        start_date: body.start_date || existReq.start_date,
        end_date: body.end_date || existReq.end_date,
        count: body.count || existReq.count,
        attachment:path || existReq.path,
        reason: body.reason || existReq.reason,
      };

      const data = await leaveRequest.findByIdAndUpdate(id, file);
      return { data };
    } catch (error) {
      return { data: error.message };
    }
  },

  deleteOneById: async (id) => {
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

export default leaveRequests;
