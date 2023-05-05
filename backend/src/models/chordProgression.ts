import MusicStyle from "./music_style";
import Scale from "./scale";


// ChordProgression contains all valid information that can be used on the frontend
// the scale, chordDegrees, and style will be contained within the model
export default class ChordProgression {
    scale: Scale;
    chordDegrees: number[];
    style: MusicStyle;
    constructor(scale: Scale, chordDegrees: number[], style: MusicStyle) {
        this.scale = scale;
        this.chordDegrees = chordDegrees;
        this.style = style;
    }
}