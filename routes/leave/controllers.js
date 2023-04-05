import leave from "../../services/leave.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
    add: async (req, res) => {
        try{
            const addResponse = await leave.add(req.body);
            if (addResponse.message === "success") {
              return httpResponse.CREATED(res, addResponse);
            } else if (addResponse.message === "failed") {
              return httpResponse.BAD_REQUEST(res, addResponse.data);
            } 
        }
        catch(addResponse) {
          return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
        }
      },
      getAll:async (req,res)=>{
        try {
            console.log('hello the way');
            const data = await leave.getAll();
            return httpResponse.SUCCESS(res, data.data);
          } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
          }

            
      }


}

export default controller;
