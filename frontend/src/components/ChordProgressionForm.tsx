import React, { useState } from 'react';
import { Form, Dropdown, Stack, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../api/constants';
import { useNavigate } from 'react-router-dom';
import { jwtPost } from '../api/client';

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


export const ChordProgressionForm = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  let navigate = useNavigate(); 
  let path = `/chordprogressions`; 

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
    if(selectedOption1 && selectedOption2){
    try {
      const response = await jwtPost(`chordProgressions/add`, chordProgressionPayload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate(path);
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
      <div>
        <h1 className="m-5" style={{ 
          border: '5px solid green', 
          borderRadius: '10px', 
          padding: '10px'
        }}>
          Create Chord Progression
        </h1>
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
         

