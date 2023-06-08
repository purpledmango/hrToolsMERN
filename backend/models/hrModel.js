import { Schema, model } from "mongoose";

const hrSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String, required: [true, "Email is required"], unique: true },
  
  password: { type: String},
  isVerified: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
  brandName: { type: String },
  companyDetails: {
    address: { type: String },
    state: { type: String },
    zip: { type: String },
    contactNo: { type: Number },
  },
  active: { type: Boolean, default: true },
});

hrSchema.path('email').validate(async function (value) {
  const hrCount = await this.model("HR").countDocuments({email: value});
  return hrCount === 0;
}, "Email already Exist");
const HrModel = model("HR", hrSchema);
export default HrModel;
