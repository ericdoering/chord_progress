import express, { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middleware/config"
import { User } from "../models/models";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../middleware/errors";
import { BCRYPT_WORK_FACTOR } from "../middleware/config";
const bcrypt = require("bcrypt");
const router = express.Router();
dotenv.config();




// Used in development to check users in database
router.get("/user", async (req: Request, res: Response) => {
    let users = await User.find({});
    return res.status(200).send(users)
});


// Used to find a specific user
router.get("/user/:user_id", async (req: Request, res: Response) => {
    let user = await User.findOne({ _id: req.params.user_id });
    return res.status(200).send(user)
});



// Register endpoint for a new user
router.post("/register", async (req: Request, res: Response) => {
    try {
        // Receive user data from form submission
        const { firstName, lastName, email, password } = req.body

        // A check to see if all inputs are fufilled
        if(!(firstName && lastName && email && password)){
             throw new BadRequestError();
        };

        // A check to see if a user already exists in the database
        const existingUser = await User.findOne({ email });
        if(existingUser){
            throw new BadRequestError()
        };

        // Using a bcrypt work factor of 12 to hash the users password
        const encryptedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)

        // The user is then created in the schema of the user model and added to MongoDB
        const user = await User.build({ firstName, lastName, email, password: encryptedPassword })

        // A JWT token will then be created and assigned to the users ID and email
        const token = jwt.sign(
            { id: user._id, email },
            SECRET_KEY,
        );

        // Saving user and token
        user.save()
        user.token = token

        // Returning the user and token
        res.status(201).json({user, token})
        
      } 
      catch (err) {
        res.status(500).send();
      }
});


// Login existing user
router.post("/login", async (req: Request, res: Response) => {
    try {
        // Recieve email and password from the front-end
        const { email, password } = req.body
        
        // Checks to see if both fields have been filled
        if(!(email && password)){
            throw new BadRequestError();
        };

        // Checks the database for the user based on the user's email
        const user = await User.findOne({ email });
        
        // If that user is not found throw a "not found" error
        if(!user){
            throw new NotFoundError();
        }
        
        // check to see if the uncrypted password in the database matches the users submitted password from the form
        if(user && (await bcrypt.compare(password, user.password))){

            // If it succeeds then assign the JWT token to the id and email 
            const token = jwt.sign(
            { id: user._id,
            email: user.email},
            SECRET_KEY,
            )
            return res.status(200).send({user, token})
        }
        else {
            return res.status(401).send();
            // throw new UnauthorizedError()
        };
    }
    catch (err) {
        return res.status(500).send();
    }
});


// Logout endpoint to sign out the user
router.post("/logout", async (req: Request, res: Response) => {
    // Remove the JWT token from the user
    try {
      res.cookie("token", "", { expires: new Date(Date.now() - 1), httpOnly: true });
      
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).send();
    }
  });

  export { router as userRouter };