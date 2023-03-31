import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";

dotenv.config();
const router = express.Router();



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

router.get('/user', async (req: Request, res: Response) => {
    const user = await User.find({})
    return res.status(200).send(user)
  })

  export { router as userRouter };