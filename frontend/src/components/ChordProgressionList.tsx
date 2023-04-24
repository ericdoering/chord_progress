import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChordProgression } from './ChordProgression';
import { API_URL } from '../api/constants';
import { jwtGet } from '../api/client';

interface ChordProgressionType {
  style: string;
  key: string;
}

export function ChordProgressionList() {
  const [chordProgressions, setChordProgressions] = useState<ChordProgressionType[]>([]);
  
  useEffect(() => {
    const getChordProgressions = async () => {
      const result = await jwtGet<ChordProgressionType[]>(`chordProgressions`);
      setChordProgressions(result.data);
    };

    getChordProgressions();
  },[]);

  const progressionComponents = chordProgressions.map((chordProgression: ChordProgressionType) => (
    <ChordProgression key={chordProgression._id} chordProgression={chordProgression} />
  ));

  return (
    <div className="mt-3">
      <ul className='m-3' style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", margin: "5px"}}>{progressionComponents}</ul>
    </div>
  );
}

