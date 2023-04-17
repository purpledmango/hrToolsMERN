import mongoose from 'mongoose';
import dotenv from 'dotenv';


const envVal = dotenv.config()['parsed']

const URI = envVal['URI']



async function connectToDb(){
    try{
        await mongoose.connect(URI);
        console.log("DB is Connected!")
    }
    catch (err){
        console.error(err);
    };
}

export default connectToDb;