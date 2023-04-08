export enum Pitch {
    A,
    B ,
    C,
    D,
    E,
    F,
    G,
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