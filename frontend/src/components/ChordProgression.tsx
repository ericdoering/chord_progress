import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
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
    <Card className="h-100">
      <Card.Body>
        <h3>Style: <b>{chordProgression.style}</b></h3>
        <h6>Key: <b>{chordProgression.key}</b></h6>
      </Card.Body>
      <Card.Footer>
        <Button onClick={routeChange}>Details</Button>
      </Card.Footer>
    </Card>
  );
};
