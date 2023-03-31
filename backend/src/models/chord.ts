
import { Pitch, SharpOrFlat, ChordQuality } from "./constants";

export default class Chord {
    pitch: Pitch;
    sharpOrFlat?: SharpOrFlat;
    chordQuality: ChordQuality;
    constructor(pitch: Pitch, sharpOrFlat: SharpOrFlat, chordQuality: ChordQuality) {
      this.pitch = pitch
      this.sharpOrFlat = sharpOrFlat;
      this.chordQuality = chordQuality;
    }
}