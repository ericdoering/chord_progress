import React, { useState } from "react";
import { Card } from "react-bootstrap";

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
        <h3>{chordProgression.style}</h3>
        <h6>{chordProgression.key}</h6>
      </Card.Body>
    </Card>
  );
};
