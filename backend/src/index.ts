import express from "express";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user";
import { chordProgressionRouter } from "./routes/chordprogressions";
import connectDB from "./connection";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})) 

// Connect to the database before utilizing routes
connectDB();

app.use(userRouter);
app.use(chordProgressionRouter);

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})