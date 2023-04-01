import express from "express";
import { json } from "body-parser";
import { userRouter } from "./routes/user";
import { chordProgressionRouter } from "./routes/chordprogressions";


const app = express();
app.use(json());

import connectDB from "./connection";

connectDB();

app.use(userRouter);
app.use(chordProgressionRouter);

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})