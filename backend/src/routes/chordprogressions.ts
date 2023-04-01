import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { User } from "../models/models";

dotenv.config();
const router = express.Router();


router.get("/chordProgressions", [], async (req: Request, res: Response) => {
    // Lists all user chord progressions
  })

router.get("/chordProgressions/:id", [], async (req: Request, res: Response) => {
    // Get a specific user chord progression
  })

router.post("/chordProgressions/add", [], async (req: Request, res: Response) => {
  // Create a new chord progression
})

router.post("/chordProgressions/:id/delete", [], async (req: Request, res: Response) => {
    // Deletes a specific user chord progression
  })

router.patch("/chordProgressions/:id/edit", [], async (req: Request, res: Response) => {
    // Deletes a specific user chord progression
  })





  export { router as chordProgressionRouter };