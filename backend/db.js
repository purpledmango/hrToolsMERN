import mongoose from "mongoose";
import dotenv from 'dotenv';

const USER = process.env.DB_URI_USER;
const PSWD = process.env.DB_URI_PSWD;

const URI = "mongodb+srv://dbAdmin:mzcwXecs8xlsFZ5S@cluster0.fxp1ehk.mongodb.net/?retryWrites=true&w=majority";

const connectToDb = ()=>{
    try {
        mongoose.connect(URI).then(()=>{console.log(`DB connected!`)}).catch((err)=>{console.log(`Error Occured: ${err}`)})
    } catch (error) {
        console.log(error);
        console.log("Error connecting with DB");
    }
}


export default connectToDb;