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

  getOneById: async (req, res) => {
    try{
    const addResponse = await leavetable.get(req.params.id);
    if(addResponse.data===null){
      return httpResponse.NOT_FOUND(res,addResponse.data);
    }
    else {
      return httpResponse.SUCCESS(res,addResponse.data);
    }
    }
    catch (error){
        return httpResponse.INTERNAL_SERVER_ERROR(res,error.data);
    }
  },

  getByfiltration: async (req, res) => {
    try {
      const forFilter = {};
      if (req.query.type) {
        const type = {
          type: req.query.type,
        };
        if (req.query.pending || req.query.available || req.query.availed) {
          forFilter.type = req.query.type;
        } else {
          var addResponse = await leavetable.getbyType(type);
          result();
        }
      }

      if (req.query.availed) {
        if (typeof req.query.availed === "object") {
          if (req.query.availed.lt)
            forFilter.availed = { $lt: req.query.availed.lt };
        }
        if (req.query.availed.gt) {
          forFilter.availed = { $gt: req.query.availed.gt };
        }
      }

      if (req.query.pending) {
        if (typeof req.query.pending === "object") {
          if (req.query.pending.lt)
            forFilter.pending = { $lt: req.query.pending.lt };
        }
        if (req.query.pending.gt) {
          forFilter.pending = { $gt: req.query.pending.gt };
        }
      }

      if (req.query.available) {
        if (typeof req.query.available === "object") {
          if (req.query.available.lt) {
            forFilter.available = { $lt: req.query.available.lt };
          }
          if (req.query.available.gt) {
            forFilter.available = { $gt: req.query.available.gt };
          }
        }
      }

      if (forFilter) {
        addResponse = await leavetable.getbyfiltration(forFilter);
        result();
      }
      function result() {
        if (addResponse.data === null) {
          return httpResponse.NOT_FOUND(res, addResponse.data);
        } else {
          return httpResponse.SUCCESS(res, addResponse.data);
        }
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
