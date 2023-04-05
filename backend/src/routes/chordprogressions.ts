import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";
import { ensureLoggedIn } from "../middleware/authentication";

dotenv.config();
const router = express.Router();


router.get("/chordProgressions", ensureLoggedIn, async (req: Request, res: Response) => {

  });

router.get("/chordProgressions/:id", ensureLoggedIn, async (req: Request, res: Response) => {
    // Get a specific user chord progression
  });

router.post("/chordProgressions/add", ensureLoggedIn, async (req: Request, res: Response) => {
  // Create a new chord progression
});

router.post("/chordProgressions/:id/delete", ensureLoggedIn, async (req: Request, res: Response) => {
    // Deletes a specific user chord progression
  });

router.patch("/chordProgressions/:id/edit", ensureLoggedIn, async (req: Request, res: Response) => {
    // Deletes a specific user chord progression
  });





  export { router as chordProgressionRouter };