import React, { useState } from 'react';
import { Form, Dropdown, Stack, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../api/constants';
import { useNavigate } from 'react-router-dom';

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
  { value: "pop", label: "pop" },
  { value: "jazz", label: "jazz" },
  { value: "blues", label: "blues" },
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
      id: "64332ce17ebe62e53c52063d",
      progression: {
        key: selectedOption1?.value,
        style: selectedOption2?.value
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzMyY2UxN2ViZTYyZTUzYzUyMDYzZCIsImVtYWlsIjoiam9lQGpvZS5qb2UiLCJpYXQiOjE2ODEwNzU0MjV9.Ha2OD5nD49-dEM_suxDnC0ojqeuM9-mKaYg0_Qs33yI"
    };
    try {
      const response = await (await axios.post(`${API_URL}/chordProgressions/add`, chordProgressionPayload));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    navigate(path);

  };




  return (
    <Form onSubmit={handleSubmit}>
    <Stack direction="horizontal"  className="md-5 justify-content-center">
      <Form.Group controlId="formOption1">
        <Form.Label>Musical Key</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-option1">
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
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-option2">
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
      <Button variant="primary" type="submit">
        GENERATE CHORD PROGRESSION
      </Button>
      </Form>
    )
};
         

