import mongoose from "mongoose";
import User from "../models/usersModel.js";

const connectDB = async () => {
    try {
        const databaseName='sample';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`,{
        });
        console.log(`Database connected: ${con.connection.host}`)
    } catch (error){
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;