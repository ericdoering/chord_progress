import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";

dotenv.config();
const router = express.Router();


router.get("/user", [], async (req: Request, res: Response) => {
    const user = await req.body
    return user
})


router.post("/register", [], async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const user = User.build({ firstName, lastName, email, password })
        await user.save()
        return res.status(201).send(user)
      } 
      catch (err) {
        res.status(500)
      }
});


router.post("/login", [], async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if(email & password){
            return res.status(200)
        }
        else return console.log("ERROR!!!")
    }
    catch (err) {
        res.status(500)
    }
})

router.post("/logout", [], async (req: Request, res: Response) => {
    try {
        const user = await req.body
        user.destroy()
        console.log("It worked!!!")
        res.status(200)
    }
    catch (err) {
        res.status(500)
    }
})

  export { router as userRouter };