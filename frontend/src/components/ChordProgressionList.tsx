import { useState, useEffect } from 'react';
import { ChordProgression } from './ChordProgression';
import { jwtGet, jwtDelete } from '../api/client';
import { Button } from 'react-bootstrap';

interface ChordProgressionType {
  _id: string;
  style: string;
  key: string;
}

export function ChordProgressionList() {
  const [chordProgressions, setChordProgressions] = useState<ChordProgressionType[]>([]);
  
  // This useEffect will query the chordProgressions and not rely on any dependency
  useEffect(() => {
    const getChordProgressions = async () => {
      const result = await jwtGet<ChordProgressionType[]>(`chordProgressions`);
      setChordProgressions(result.data);
    };

    getChordProgressions();
  },[]);

  const deleteChordProgression = async (id: string) => {
    await jwtDelete(`chordProgressions/delete/${id}`);
    setChordProgressions(chordProgressions.filter(chordProgression => chordProgression._id !== id));
  }

  // Map the chordProgressions as listed cards that also contain a delete button
  const progressionComponents = chordProgressions.reverse().map((chordProgression: ChordProgressionType) => (
    <li style={{ marginBottom: "10px", position: "relative"}}>
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}>
        <Button size="sm" variant="danger" onClick={() => deleteChordProgression(chordProgression._id)}>x</Button>
      </div>
      <ChordProgression chordProgression={chordProgression} />
    </li>
  ));

  return (
    <div className="mt-3">
      <ul style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", margin: "5px", listStyleType: "none"}}>
        {progressionComponents}
      </ul>
    </div>
  );
}
