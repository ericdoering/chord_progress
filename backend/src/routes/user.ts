import express, { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middleware/config"
import { User } from "../models/models";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../middleware/errors";
import { ensureLoggedIn } from "../middleware/authentication";
import { createToken } from "../middleware/token"
import { BCRYPT_WORK_FACTOR } from "../middleware/config";
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt");
const router = express.Router();
dotenv.config();
router.use(cookieParser());



router.get("/user", async (req: Request, res: Response) => {
    let users = await User.find({});
    return res.status(200).send(users)
})



router.post("/register", async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body

        if(!(firstName && lastName && email && password)){
             throw new BadRequestError();
        };

        const existingUser = await User.findOne({ email });
        if(existingUser){
            throw new BadRequestError()
        };

        const encryptedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)
        const user = await User.build({ firstName, lastName, email, password: encryptedPassword })

        const token = jwt.sign(
            { id: user._id, email },
            SECRET_KEY,
        );

        user.token = token

        user.save()

        res.status(201).json(user)
        
      } 
      catch (err) {
        res.status(500).send();
      }
});



router.post("/login", async (req: Request, res: Response) => {
    try {
        
        const { email, password } = req.body
        
        
        if(!(email && password)){
            throw new BadRequestError();
        };

        const user = await User.findOne({ email });
        
        if(!user){
            throw new NotFoundError();
        }
            
        if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign(
            { id: user._id },
            SECRET_KEY,
            )
            user.token = token

            const options = {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                httpOnly: true
            };
            res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })
        }
    }
    catch (err) {
        return res.status(500).send();
    }
});



router.post("/logout", async (req: Request, res: Response) => {
    try {
      res.cookie("token", "", { expires: new Date(Date.now() - 1), httpOnly: true });
      
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).send();
    }
  });

  export { router as userRouter };