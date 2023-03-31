import Scale from "./scale";


export default class ChordProgression {
    scale: Scale
    chordDegrees: number[]
    constructor(scale: Scale, chordDegrees: number[]) {
        this.scale = scale;
        this.chordDegrees = chordDegrees;
    }
}