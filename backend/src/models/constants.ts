// setting Pitch which are pure musical tones
export enum Pitch {
    A = 'A',
    B  = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F= 'F',
    G = 'G',
}

// Setting the 3 possible chord qualities that this app will utilize
export enum ChordQuality {
    MAJOR = 'Major',
    MINOR = 'Minor',
    DIMINISHED = 'Diminished',
}

// Setting what the next consecutive key is for each key
export const nextKey = {
    [Pitch.A]: Pitch.B, 
    [Pitch.B]: Pitch.C, 
    [Pitch.C]: Pitch.D, 
    [Pitch.D]: Pitch.E,
    [Pitch.E]: Pitch.F, 
    [Pitch.F]: Pitch.G,
    [Pitch.G]: Pitch.A 
}