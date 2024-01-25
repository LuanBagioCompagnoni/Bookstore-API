import mongoose, { mongo } from "mongoose";

async function connectDatabase(){
    mongoose.connect("mongodb+srv://admin:lrWnoX3TLrsHuMu2@bookstore-api.ov9t0r6.mongodb.net/bookstore?retryWrites=true&w=majority")
    return mongoose.connection;
}

export default connectDatabase