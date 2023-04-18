import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";
import { ensureLoggedIn } from "../middleware/authentication";
import ChordProgression from "../models/chordProgression";
import { scales } from "../models/scale";
import { styles } from "../models/music_style";
import { parseJwt } from "../utils/jwt";

dotenv.config();
const router = express.Router();




router.get("/chordProgressions", async (req: Request, res: Response) => {
  // const { id } = req.body;
  const userData = parseJwt(req)
  let user = await User.findOne({"_id": userData.id});
  return res.status(200).send(user.chordProgressions)
  });





router.get("/chordProgression/:progression_id", async (req: Request, res: Response) => {
  const userData = parseJwt(req)
  let user = await User.findOne({"_id": userData.id});
  let chordProgression = user.chordProgressions.find((progression: { _id: string; }) => progression._id.valueOf() === req.params.progression_id)
  const {key, style} = chordProgression;
  // @ts-ignore
  console.log(key, style)
  // @ts-ignore
  let chordProgressionResult = new ChordProgression(scales[key], styles[style].chordDegrees, styles[style].name)
  return res.status(200).send(chordProgressionResult);
  });




router.post("/chordProgressions/add", async (req: Request, res: Response) => {
  const progression = req.body.progression
  const userData = parseJwt(req)
  let update = await User.updateOne({"_id": userData.id},
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