import React, { useState } from 'react';
import { Form, Dropdown, Stack } from 'react-bootstrap';

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

const instrument: Option[] = [
  { value: "guitar", label: "guitar" },
  { value: "piano", label: "piano" },
];

export const ChordProgressionForm = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<Option | null>(null);

  const handleOption1Change = (option: Option | null) => {
    setSelectedOption1(option);
  };

  const handleOption2Change = (option: Option | null) => {
    setSelectedOption2(option);
  };

  const handleOption3Change = (option: Option | null) => {
    setSelectedOption3(option);
  };

  return (
    <Form>
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

      <Form.Group controlId="formOption3">
        <Form.Label>Instrument</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-option3">
            {selectedOption3?.label ?? 'Select an option'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {instrument.map((option) => (
              <Dropdown.Item
                key={option.value}
                active={selectedOption3?.value === option.value}
                onClick={() => handleOption3Change(option)}
              >
                {option.label}
              </Dropdown.Item>
            ))}
            </Dropdown.Menu>
        </Dropdown>
        </Form.Group>
        </Stack>
        </Form>
    )
};
         

