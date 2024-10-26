import mongoose from "mongoose";


function databaseConnection(){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected successfully");
    } catch (error) {
        console.log("MongoDB connection Failed", error);
    }
};

export default databaseConnection;