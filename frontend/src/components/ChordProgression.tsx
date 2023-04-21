import React, { useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Props {
  chordProgression: {
    style: string;
    key: string;
    _id: string
  };
}


export const ChordProgression: React.FC<Props> = ({ chordProgression }) => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
  let path = `/chordprogressiondetail/${chordProgression._id}`; 
  navigate(path);
}

  return (
    <Stack direction="horizontal" gap={2}>
      <div>
        <Card className="h-100" style={{ width: '20rem' }}>
        <Card.Body className="text-center">
          <h3>Style: <b>{chordProgression.style}</b></h3>
          <h6>Key: <b>{chordProgression.key}</b></h6>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button className="align-items-center" variant="success" size="sm" onClick={routeChange}>Details</Button>
        </Card.Footer>
        </Card>
      </div>
    </Stack>
  );
};
