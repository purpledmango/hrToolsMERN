import mongoose from 'mongoose';


const URI = "mongodb://nitish:zz1010@103.127.28.16:27017/Rnj"



async function connectToDb(){
    try{
        await mongoose.connect(URI);
        console.log("DB is Connected!")
    }
    catch (err){
        console.error(err);
    };
}

connectToDb();