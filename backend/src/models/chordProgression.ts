import MusicStyle from "./music_style";
import Scale from "./scale";


export default class ChordProgression {
    scale: Scale
    chordDegrees: number[]
    style: MusicStyle
    constructor(scale: Scale, chordDegrees: number[], style: MusicStyle) {
        this.scale = scale;
        this.chordDegrees = chordDegrees;
        this.style = style;
    }
}