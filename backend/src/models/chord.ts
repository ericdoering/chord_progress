
import { Pitch,ChordQuality } from "./constants";

export default class Chord {
    pitch: Pitch;
    chordQuality: ChordQuality;
    sharp?: string
    constructor(pitch: Pitch,  chordQuality: ChordQuality, sharp?: string) {
      this.pitch = pitch
      this.sharp = sharp;
      this.chordQuality = chordQuality;
    }
}




