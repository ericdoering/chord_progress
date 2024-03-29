import React, { useState } from 'react';
import { Form, Dropdown, Stack, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { jwtPost } from '../api/client';
import writingSong from "../assets/writing_song.png"
import { AxiosResponse } from 'axios';

type Option = {
  value: string;
  label: string;
};


const key: Option[] = [
  { value: "A", label: "Key of A" },
  { value: "A#", label: "Key of A#/Bb" },
  { value: "B", label: "Key of B" },
  { value: "C", label: "Key of C" },
  { value: "C#", label: "Key of C#/Db" },
  { value: "D", label: "Key of D" },
  { value: "D#", label: "Key of D#/Eb" },
  { value: "E", label: "Key of E" },
  { value: "F", label: "Key of F" },
  { value: "F#", label: "Key of F#/Gb" },
  { value: "G", label: "Key of G" },
  { value: "G#", label: "Key of G#/Ab" },
];

const style: Option[] = [
  { value: "Pop", label: "Pop" },
  { value: "Jazz", label: "Jazz" },
  { value: "Blues", label: "Blues" },
];

// The key and the style are the only values that need to be stored and submitted for the chordProgression Form
export const ChordProgressionForm = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  let navigate = useNavigate(); 

  const handleOption1Change = (option: Option | null) => {
    setSelectedOption1(option);
  };

  const handleOption2Change = (option: Option | null) => {
    setSelectedOption2(option);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();

    const chordProgressionPayload = {
      progression: {
        key: selectedOption1?.value,
        style: selectedOption2?.value
      },
    };
    // If both fields are filled out we are going to take the user to that new chord progression
    // It will slice the most recent chordProgression array and put that into the url
    if(selectedOption1 && selectedOption2){
    try {
      const response : AxiosResponse = await jwtPost(`chordProgressions/add`, chordProgressionPayload);
      navigate(`/chordprogressiondetail/${response.data.chordProgressions.slice(-1)[0]._id}`);


    } catch (error) {
      console.error(error);
    }
  }

  };

  let returnPath = `/chordProgressions`

  const handleReturnClick = () => {
    navigate(returnPath)
}



  return (
    <Stack className="align-items-center text-align-center">
      <Button className="mt-5" variant="success" size="sm" onClick={handleReturnClick}>
        Return
      </Button>
      <img className='mt-4 rounded' src={writingSong} width="300rem" height="170rem" />
      <div>
        <h1 className="m-4">Create Chord Progression</h1>
      </div>
    <Form onSubmit={handleSubmit}>
    <Button className="mb-5" variant="success" size="lg" type="submit">
        GENERATE CHORD PROGRESSION
      </Button>
    <Stack direction="horizontal"  className="md-5 justify-content-center">
      <Form.Group controlId="formOption1">
        <Form.Label>Musical Key</Form.Label>
        <Dropdown className="me-5" drop="down">
          <Dropdown.Toggle variant="success" id="dropdown-option1">
            {selectedOption1?.label ?? 'Select an option'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {key.map((option) => (
              <Dropdown.Item
                key={option.value}
                active={selectedOption1?.value === option.value}
                onClick={() => handleOption1Change(option)}
              >
                {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <Form.Group controlId="formOption2">
        <Form.Label>Style/Genre</Form.Label>
        <Dropdown drop="down">
          <Dropdown.Toggle variant="success" id="dropdown-option2">
            {selectedOption2?.label ?? 'Select an option'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {style.map((option) => (
              <Dropdown.Item
                key={option.value}
                active={selectedOption2?.value === option.value}
                onClick={() => handleOption2Change(option)}
              >
                {option.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      </Stack>
      </Form>
    </Stack>
    )
};
         

