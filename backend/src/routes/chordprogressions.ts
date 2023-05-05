import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";
import ChordProgression from "../models/chordProgression";
import { scales } from "../models/scale";
import { styles } from "../models/music_style";
import { parseJwt } from "../utils/jwt";

dotenv.config();
const router = express.Router();


// Get all chord progressions for an individual user
  router.get("/chordProgressions", async (req: Request, res: Response) => {
    const userData = parseJwt(req)
    // Get the correct user that matches their ID
    let user = await User.findOne({"_id": userData.id});
    // Send back all of the user's chord progressions found in the database
    return res.status(200).send(user.chordProgressions)
    });




// Get an individual chord progression 
  router.get("/chordProgression/:progression_id", async (req: Request, res: Response) => {
    const userData = parseJwt(req)
    // Get the correct user that matches their ID
    let user = await User.findOne({"_id": userData.id});
    // Using the progression ID from the url parameter get the specific ID for one chord progression
    let chordProgression = user.chordProgressions.find((progression: { _id: string; }) => progression._id.valueOf() === req.params.progression_id)
    // destructure key and style from the chordProgression result
    const {key, style} = chordProgression;
    // @ts-ignore
    // @ts-ignore
    // Set the new chordProgressionResult to an instance of the the ChordProgression model
    let chordProgressionResult = new ChordProgression(scales[key], styles[style].chordDegrees, styles[style].name)
    return res.status(200).send(chordProgressionResult);
    });
  
  
  
  // Add a new chord progression
    router.post("/chordProgressions/add", async (req: Request, res: Response) => {
      // takes in submitted progression from the front-end chord progression form
      const progression = req.body.progression
      const userData = parseJwt(req)
      // MongoDB method that adds the new chord progression to the database
      await User.updateOne({"_id": userData.id}, { "$push": { "chordProgressions": progression } })
    
      // A check to make suere that we have the individual user
      const updatedUser = await User.findOne({ "_id": userData.id })
      if (!updatedUser) {
        return res.status(404).send({ error: "User not found" })
      }
    
      return res.status(201).send(updatedUser)
    });



// Delete a chord progression 
  router.delete("/chordProgressions/delete/:id", async (req: Request, res: Response) => {
    // Get the specific chord progression ID as a url parameter
    const progressionId = req.params.id;
    const userData = parseJwt(req);
    
    // MongoDB method that removes the chord progression from the database
    let update = await User.updateOne({"_id": userData.id},
      { "$pull": { "chordProgressions": { "_id": progressionId } } },
      { "new": true })

    return res.status(200).send(update);
  });



export { router as chordProgressionRouter };