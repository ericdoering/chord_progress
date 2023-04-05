import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ChordProgressions() {
  return (
    <Card className="text-center">
      <Card.Header>Chord Progress</Card.Header>
      <Card.Body>
        <Card.Title>Welcome //User </Card.Title>
        <Card.Text>
          Click the button below to begin making your chord progression, or
          scoll below to see previously made chord progressions
        </Card.Text>
        <Button variant="primary">Make Chord Progression</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default ChordProgressions;