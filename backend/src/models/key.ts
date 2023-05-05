import { Pitch } from "./constants";


// To define the keys the pitch is required. Some keys are sharp so this must be defined in this model
export default class Key {
    pitch: Pitch;
    sharp?: boolean;
    constructor(pitch: Pitch, sharp?: boolean) {
      this.pitch = pitch
      this.sharp = sharp;
    }
}


// We set the key as a pitch and the optional boolean of the key containing a sharp
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