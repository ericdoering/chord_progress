import Chord from "./chord";
import Key from "./key";


export default class ChordProgression {
    chords: Chord[]
    key: Key
    constructor(chords: Chord[], key: Key) {
        this.chords = chords;
        this.key = key;
      }
}