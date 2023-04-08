import { Pitch } from "./constants";

export default class Key {
    pitch: Pitch;
    sharp?: boolean;
    constructor(pitch: Pitch, sharp?: boolean) {
      this.pitch = pitch
      this.sharp = sharp;
    }
}



const keys = {"A": new Key(Pitch.A), 
              "A#": new Key(Pitch.A, true),
              "B": new Key(Pitch.B),
              "C": new Key(Pitch.C),
              "C#": new Key(Pitch.C, true),
              "D": new Key(Pitch.D),
              "D#": new Key(Pitch.D, true),
              "E": new Key(Pitch.E),
              "F": new Key(Pitch.F),
              "F#": new Key(Pitch.F, true),
              "G": new Key(Pitch.G),
              "G#": new Key(Pitch.G, true)
            }


export { keys };