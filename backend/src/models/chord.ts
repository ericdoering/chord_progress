
import { Pitch, ChordQuality } from "./constants";


// The chord instance should contain the pitch, chordQuality, and the optional boolean of being a sharp.
export default class Chord {
    pitch: Pitch;
    chordQuality: ChordQuality;
    sharp?: boolean
    constructor(pitch: Pitch,  chordQuality: ChordQuality, sharp?: boolean) {
      this.pitch = pitch
      this.sharp = sharp;
      this.chordQuality = chordQuality;
    }
}




