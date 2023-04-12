import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

interface Props {
  chordProgression: {
    style: string;
    key: string;
  };
}

export const ChordProgression: React.FC<Props> = ({ chordProgression }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <h3>Style: <b>{chordProgression.style}</b></h3>
        <h6>Key: <b>{chordProgression.key}</b></h6>
      </Card.Body>
      <Card.Footer>
        <Button>Details</Button>
      </Card.Footer>
    </Card>
  );
};
