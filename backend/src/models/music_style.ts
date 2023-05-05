import Scale from "./scale";

// Setting the names of each chord style
enum StyleName {
    BLUES = 'Blues',
    JAZZ = 'Jazz',
    POP = 'Pop'
}

// The musicStyle class will contain the name, intervals/indexes/chordDegrees
export default class MusicStyle {
    name: StyleName
    chordDegrees: number[]
    constructor(styleName: StyleName, chordDegrees: number[]) {
        this.name = styleName;
        this.chordDegrees = chordDegrees;
    }
}


const Blues = new MusicStyle(StyleName.BLUES, [1, 4, 5])
const Jazz = new MusicStyle(StyleName.JAZZ, [2, 5, 1])
const Pop = new MusicStyle(StyleName.POP, [1, 5, 6, 4])


export { Blues, Jazz, Pop }

export const styles = {
    'Jazz': Jazz, 
    'Blues': Blues,
    'Pop': Pop
}