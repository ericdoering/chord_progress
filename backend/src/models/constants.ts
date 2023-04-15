export enum Pitch {
    A = 'A',
    B  = 'B',
    C = 'C',
    D = 'D',
    E = 'D',
    F= 'F',
    G = 'G',
}

export enum ChordQuality {
    MAJOR = 'Major',
    MINOR = 'Minor',
    DIMINISHED = 'Diminished',
}

export const nextKey = {
    [Pitch.A]: Pitch.B, 
    [Pitch.B]: Pitch.C, 
    [Pitch.C]: Pitch.D, 
    [Pitch.D]: Pitch.E,
    [Pitch.E]: Pitch.F, 
    [Pitch.F]: Pitch.G,
    [Pitch.G]: Pitch.A 
}