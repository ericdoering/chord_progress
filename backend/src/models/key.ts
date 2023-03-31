import { Pitch, SharpOrFlat } from "./constants";

export default class Key {
    pitch: Pitch;
    sharpOrFlat?: SharpOrFlat;
    constructor(pitch: Pitch, sharpOrFlat: SharpOrFlat) {
      this.pitch = pitch
      this.sharpOrFlat = sharpOrFlat;
    }
}