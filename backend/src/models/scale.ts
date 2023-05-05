import Chord from "./chord";
import { Pitch, ChordQuality } from "./constants";
import Key, { keys } from "./key";

// Creating the major scale within each of the keys and giving it the correct series of chords for each 
export default class Scale {
    chords: Chord[]
    key: Key
    sharp?: boolean;
    constructor(chords: Chord[], key: Key, sharp?: boolean) {
        // Keep theses in scale order.
        this.chords = chords;
        this.key = key;
        this.sharp = sharp;
      }

}

const scales = {
    "A": new Scale(
    [
      new Chord(Pitch.A, ChordQuality.MAJOR),
      new Chord(Pitch.B, ChordQuality.MINOR),
      new Chord(Pitch.C, ChordQuality.MINOR, true),
      new Chord(Pitch.D, ChordQuality.MAJOR),
      new Chord(Pitch.E, ChordQuality.MAJOR),
      new Chord(Pitch.F, ChordQuality.MINOR, true),
      new Chord(Pitch.G, ChordQuality.DIMINISHED, true),
      new Chord(Pitch.A, ChordQuality.MAJOR),
    ], 
    keys["A"],
    ), 

    "A#": new Scale(
    [
      new Chord(Pitch.A, ChordQuality.MAJOR, true),
      new Chord(Pitch.B, ChordQuality.MINOR),
      new Chord(Pitch.C, ChordQuality.MINOR, true),
      new Chord(Pitch.D, ChordQuality.MAJOR),
      new Chord(Pitch.E, ChordQuality.MAJOR),
      new Chord(Pitch.F, ChordQuality.MINOR, true),
      new Chord(Pitch.G, ChordQuality.DIMINISHED, true),
      new Chord(Pitch.A, ChordQuality.MAJOR),
    ], 
    keys["A#"],
    ), 

    "B": new Scale(
    [
      new Chord(Pitch.B, ChordQuality.MAJOR),
      new Chord(Pitch.C, ChordQuality.MINOR, true),
      new Chord(Pitch.D, ChordQuality.MINOR, true),
      new Chord(Pitch.E, ChordQuality.MAJOR),
      new Chord(Pitch.F, ChordQuality.MAJOR, true),
      new Chord(Pitch.G, ChordQuality.MINOR, true),
      new Chord(Pitch.A, ChordQuality.DIMINISHED, true),
      new Chord(Pitch.B, ChordQuality.MAJOR),
    ], 
    keys["B"],
    ),

    "C": new Scale(
    [
      new Chord(Pitch.C, ChordQuality.MAJOR),
      new Chord(Pitch.D, ChordQuality.MINOR),
      new Chord(Pitch.E, ChordQuality.MINOR),
      new Chord(Pitch.F, ChordQuality.MAJOR),
      new Chord(Pitch.G, ChordQuality.MAJOR),
      new Chord(Pitch.A, ChordQuality.MINOR),
      new Chord(Pitch.B, ChordQuality.DIMINISHED),
      new Chord(Pitch.C, ChordQuality.MAJOR),
    ], 
    keys["C"],
    ),

    "C#": new Scale(
    [
      new Chord(Pitch.C, ChordQuality.MAJOR, true),
      new Chord(Pitch.D, ChordQuality.MINOR, true),
      new Chord(Pitch.F, ChordQuality.MINOR),
      new Chord(Pitch.F, ChordQuality.MAJOR, true),
      new Chord(Pitch.G, ChordQuality.MAJOR, true),
      new Chord(Pitch.A, ChordQuality.MINOR, true),
      new Chord(Pitch.C, ChordQuality.DIMINISHED),
      new Chord(Pitch.C, ChordQuality.MAJOR, true),
    ], 
    keys["C#"],
    ),

    "D": new Scale(
    [
      new Chord(Pitch.D, ChordQuality.MAJOR),
      new Chord(Pitch.E, ChordQuality.MINOR),
      new Chord(Pitch.F, ChordQuality.MINOR, true),
      new Chord(Pitch.G, ChordQuality.MAJOR),
      new Chord(Pitch.A, ChordQuality.MAJOR),
      new Chord(Pitch.B, ChordQuality.MINOR),
      new Chord(Pitch.C, ChordQuality.DIMINISHED, true),
      new Chord(Pitch.D, ChordQuality.MAJOR),
    ], 
    keys["D"],
    ),

    "D#": new Scale(
    [
      new Chord(Pitch.D, ChordQuality.MAJOR, true),
      new Chord(Pitch.F, ChordQuality.MINOR),
      new Chord(Pitch.G, ChordQuality.MINOR),
      new Chord(Pitch.G, ChordQuality.MAJOR, true),
      new Chord(Pitch.A, ChordQuality.MAJOR, true),
      new Chord(Pitch.C, ChordQuality.MINOR),
      new Chord(Pitch.D, ChordQuality.DIMINISHED),
      new Chord(Pitch.D, ChordQuality.MAJOR, true),
    ], 
    keys["D#"],
    ),

    "E": new Scale(
    [
      new Chord(Pitch.E, ChordQuality.MAJOR),
      new Chord(Pitch.F, ChordQuality.MINOR, true),
      new Chord(Pitch.G, ChordQuality.MINOR, true),
      new Chord(Pitch.A, ChordQuality.MAJOR),
      new Chord(Pitch.B, ChordQuality.MAJOR),
      new Chord(Pitch.C, ChordQuality.MINOR, true),
      new Chord(Pitch.D, ChordQuality.DIMINISHED, true),
      new Chord(Pitch.E, ChordQuality.MAJOR),
    ], 
    keys["E"],
    ),

    "F": new Scale(
    [
      new Chord(Pitch.F, ChordQuality.MAJOR),
      new Chord(Pitch.G, ChordQuality.MINOR),
      new Chord(Pitch.A, ChordQuality.MINOR),
      new Chord(Pitch.A, ChordQuality.MAJOR, true),
      new Chord(Pitch.C, ChordQuality.MAJOR),
      new Chord(Pitch.D, ChordQuality.MINOR),
      new Chord(Pitch.E, ChordQuality.DIMINISHED),
      new Chord(Pitch.F, ChordQuality.MAJOR),
    ], 
    keys["F"],
    ),

    "F#": new Scale(
    [
      new Chord(Pitch.F, ChordQuality.MAJOR, true),
      new Chord(Pitch.G, ChordQuality.MINOR, true),
      new Chord(Pitch.A, ChordQuality.MINOR, true),
      new Chord(Pitch.B, ChordQuality.MAJOR),
      new Chord(Pitch.C, ChordQuality.MAJOR, true),
      new Chord(Pitch.D, ChordQuality.MINOR, true),
      new Chord(Pitch.F, ChordQuality.DIMINISHED),
      new Chord(Pitch.F, ChordQuality.MAJOR, true),
    ], 
    keys["F#"],
    ),

    "G": new Scale(
    [
      new Chord(Pitch.G, ChordQuality.MAJOR),
      new Chord(Pitch.A, ChordQuality.MINOR),
      new Chord(Pitch.B, ChordQuality.MINOR),
      new Chord(Pitch.C, ChordQuality.MAJOR),
      new Chord(Pitch.D, ChordQuality.MAJOR),
      new Chord(Pitch.E, ChordQuality.MINOR),
      new Chord(Pitch.F, ChordQuality.DIMINISHED, true),
      new Chord(Pitch.G, ChordQuality.MAJOR),
    ], 
    keys["G"],
    ),

    "G#": new Scale(
    [
      new Chord(Pitch.G, ChordQuality.MAJOR, true),
      new Chord(Pitch.A, ChordQuality.MINOR, true),
      new Chord(Pitch.C, ChordQuality.MINOR),
      new Chord(Pitch.C, ChordQuality.MAJOR, true),
      new Chord(Pitch.D, ChordQuality.MAJOR, true),
      new Chord(Pitch.F, ChordQuality.MINOR),
      new Chord(Pitch.G, ChordQuality.DIMINISHED),
      new Chord(Pitch.G, ChordQuality.MAJOR, true),
    ], 
    keys["G#"],
    ),
}


export { scales };