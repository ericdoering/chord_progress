import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChordProgression } from './ChordProgression';
import { API_URL } from '../api/constants';

interface ChordProgressionType {
  style: string;
  key: string;
}

export function ChordProgressionList() {
  const [chordProgressions, setChordProgressions] = useState<ChordProgressionType[]>([]);
  
  useEffect(() => {
    const getChordProgressions = async () => {
      const result = await axios.get<ChordProgressionType[]>(`${API_URL}/chordProgressions/64332ce17ebe62e53c52063d`);
      setChordProgressions(result.data);
    };

    getChordProgressions();
  },[]);

  const progressionComponents = chordProgressions.map((chordProgression: ChordProgressionType) => (
    <ChordProgression key={chordProgression.key} chordProgression={chordProgression} />
  ));

  return (
    <div>
      <ul>{progressionComponents}</ul>
    </div>
  );
}

