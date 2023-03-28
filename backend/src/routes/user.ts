import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();



router.post("/register", [],  (req: Request, res: Response) => {
    try {
        return res.send("User has been created")
      } 
      catch (err) {
        res.status(500)
      }
});

  export { router as userRouter };