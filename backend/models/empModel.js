import { Schema } from "mongoose";

const EmployeeSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  designation: { type: String },
  department: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  hr: { type: Schema.Types.ObjectId, ref: "HR" },
  leaveBalance: { type: Number },
  attendance: [
    {
      checkIn: { type: Date },
      checkOut: { type: Date },
    },
  ],
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
export default EmployeeModel;
