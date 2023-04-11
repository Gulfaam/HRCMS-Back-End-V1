import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  name: { 
    type: String, 
    required: true, 
    maxlength: 50 
  },
  permissions: { 
    type: Schema.Types.Array,
    default: []
  },

});
export default mongoose.model("Role", schema);
