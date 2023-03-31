import mongoose from "mongoose";

const URI = "mongodb+srv://edoering:chordProgress777@cluster0.fqxphex.mongodb.net/?retryWrites=true&w=majority"

export default async function connectDB() {
    try {
        console.log("attempting connection");
        await mongoose.connect(URI)
        console.log("Connected to MongoDB")
    }
    catch(error) {
        console.error(error)
        process.exit(1);
    }
};

