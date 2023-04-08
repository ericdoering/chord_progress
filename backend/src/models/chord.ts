
import { Pitch,ChordQuality } from "./constants";

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




