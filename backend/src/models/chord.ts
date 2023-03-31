
import { Pitch, SharpOrFlat, ChordQuality } from "./constants";

export default class Chord {
    pitch: Pitch;
    sharpOrFlat?: SharpOrFlat;
    chordQuality: ChordQuality;
    scaleDegree: number;
    constructor(pitch: Pitch, sharpOrFlat: SharpOrFlat, chordQuality: ChordQuality, scaleDegree: number) {
      this.pitch = pitch
      this.sharpOrFlat = sharpOrFlat;
      this.chordQuality = chordQuality;
      this.scaleDegree = scaleDegree;
    }
}