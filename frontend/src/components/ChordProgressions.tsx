import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ChordProgressionForm,  } from './ChordProgressionForm';


function ChordProgressions() {
  return (
    <>
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Welcome //User </Card.Title>
        <Card.Text>
          Click the button below to begin making your chord progression, or
          scoll below to see previously made chord progressions
        </Card.Text>
        <Button variant="primary">Make Chord Progression</Button>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
    <ChordProgressionForm />
    </>

  );
}

export default ChordProgressions;