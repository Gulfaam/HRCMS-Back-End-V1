import leavetable from "../../services/leavetable.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try {
      const addResponse = await leavetable.add(req.body);
      if (addResponse.savedData === null || "") {
        return httpResponse.CONFLICT(res, addResponse.data);
      } else {
        return httpResponse.SUCCESS(res, addResponse.data);
      }
    } catch (addResponse) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  get: async (req, res) => {
    try {
      if (req.query.id) {
        const id = req.query.id;
        var addResponse = await leavetable.get(id);
      }
      if (req.query.type) {
        const type = {
          type: req.query.type,
        };
        var addResponse = await leavetable.getbyType(type);
      }
      if (req.query.pending) {
        const pending=req.query.pending; 
        var addResponse = await leavetable.getbyPending(pending);
      } 
      if (addResponse.data === null) {
        return httpResponse.NOT_FOUND(res, addResponse.data);
      }
     else {
        return httpResponse.SUCCESS(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.data);
    }
  },

  getAll: async (req, res) => {
    try {
      const limitHolder = req.query.limit;
      const skipHolder = req.query.skip;
      const data = await leavetable.getAll(limitHolder, skipHolder);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.data);
    }
  },
};

export default controller;
