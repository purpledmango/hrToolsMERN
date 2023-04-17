import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';


const employeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    hiredDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    salary: {
      type: Number,
      required: true
    },
    supervisor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    },
    department: {
      type: String,
      required: true,
    },
    noticePeriod: {
      type: Number,
      required: true
    },
    onboard: {
      type: Boolean,
      default: false,
    },
    

    
    
});
  

const empModel = mongoose.model("Employees", employeeSchema);

export default empModel;