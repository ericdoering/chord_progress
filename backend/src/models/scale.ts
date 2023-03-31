import Chord from "./chord";
import Key from "./key";


export default class Scale {
    chords: Chord[]
    key: Key
    constructor(chords: Chord[], key: Key) {
        // Keep theses in scale order.
        this.chords = chords;
        this.key = key;
      }
}