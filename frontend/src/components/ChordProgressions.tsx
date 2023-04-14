
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { ChordProgressionList } from './ChordProgressionList';
import { useNavigate } from "react-router-dom";
  


function ChordProgressions() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/chordprogressionadd`; 
    navigate(path);
  }
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
      </Card.Body>
      <Card.Footer>
      <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Create chord progression
            </Button>
      </Card.Footer>
    </Card>
    <ChordProgressionList />
    </>

  );
}

export default ChordProgressions;