import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";
import { ensureLoggedIn } from "../middleware/authentication";
import ChordProgression from "../models/chordProgression";
import { scales } from "../models/scale";
import { styles } from "../models/music_style";

dotenv.config();
const router = express.Router();




router.get("/user/:id/chordProgressions", async (req: Request, res: Response) => {
  // const { id } = req.body;
  let user = await User.findOne({"_id": req.params.id});
  return res.status(200).send(user.chordProgressions)
  });





router.get("/user/:id/chordProgression/:progression_id", async (req: Request, res: Response) => {
  let user = await User.findOne({"_id": req.params.id});
  let chordProgression = user.chordProgressions.find((progression: { _id: string; }) => progression._id.valueOf() === req.params.progression_id)
  const {key, style} = chordProgression;
  // @ts-ignore
  console.log(key, style)
  // @ts-ignore
  let chordProgressionResult = new ChordProgression(scales[key], styles[style].chordDegrees, styles[style].name)
  return res.status(200).send(chordProgressionResult);
  });




router.post("/chordProgressions/add", async (req: Request, res: Response) => {
      const { id, progression } = req.body;
  
  let update = await User.updateOne({"_id": id},
   { "$push": { "chordProgressions": progression} },
    { "new": true, "upsert": true })

    let user = req.body.user
    return res.status(201).send(update);
});





router.post("/chordProgressions/:id/delete", ensureLoggedIn, async (req: Request, res: Response) => {
    // Deletes a specific user chord progression
  });

router.patch("/chordProgressions/:id/edit", ensureLoggedIn, async (req: Request, res: Response) => {
    // Deletes a specific user chord progression
  });





  export { router as chordProgressionRouter };