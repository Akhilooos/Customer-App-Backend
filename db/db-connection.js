import mongoose from "mongoose";

const dbUrl = "mongodb+srv://kanjikuzhysatheesan:Akhil123@cluster0.gksirrt.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async() =>{
    try{
    await mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
    }
    catch(error){
        console.error('Error connecting to the database:', error);
    }
}

export default connectDb;