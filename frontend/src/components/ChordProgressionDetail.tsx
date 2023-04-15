import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../api/constants';


  export const ChordProgressionDetail: React.FC = () => {
    const { id } = useParams()
    const [chordProgression, setChordProgression] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate(); 
    useEffect(() => {
      async function getChordProgression() {
        try {
          setIsLoading(true)
          const response = await axios.get(`${API_URL}/user/64332ce17ebe62e53c52063d/chordProgression/${id}`);
          console.log(response);
          setChordProgression(response.data)
          setIsLoading(false)
          console.log(response);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      if (!(chordProgression || isLoading)) getChordProgression()
    }, [])

    const chords = useMemo(() => {
      if (chordProgression) {
        const {chordDegrees, scale} = chordProgression;
        return chordDegrees.map(degree => scale.chords[degree - 1])
      }
    }, [chordProgression])
    const nextPage = () => {
      let path = `/chordprogressions`; 
      navigate(path);
      };

    return (
      <>
      <Container>
        <Row>
          {chords && chords.map((chord, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Image src={`/chords/${chord.pitch}${!!chord.sharp ? 'Sharp' : ''}_${chord.chordQuality}.png`} rounded fluid />
              <p>{chord.pitch}{chord.sharp ? '#' : ''} {chord.chordQuality}</p>
              {console.log(chord)}
            </Col>
          ))}
        </Row>
        { chords && 
        (<><h2>Key: {chordProgression.scale.key.pitch}</h2>
        <h2>Style: {chordProgression.style}</h2>
        <h3>Songs that utilize this chord progression</h3></>)
  }   
      </Container>
      <Button onClick={nextPage}>
          Return
      </Button>
      </>
    );
  };