import mongoose from "mongoose";

export const createConnection = async ()=>{
 try{
    const result = await mongoose.connect(process.env.DB_URL);
    return result;
 }catch(error){
    return console.log("ERROR in DB connection", error)
 }
}
