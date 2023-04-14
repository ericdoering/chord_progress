import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";
import { ensureLoggedIn } from "../middleware/authentication";

dotenv.config();
const router = express.Router();


router.get("/chordProgressions/:id", async (req: Request, res: Response) => {
  // const { id } = req.body;

  let user = await User.findOne({"_id": req.params.id});
  

  return res.status(200).send(user.chordProgressions)

  });

router.get("/chordProgressions/:id", ensureLoggedIn, async (req: Request, res: Response) => {
    // Get a specific user chord progression
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