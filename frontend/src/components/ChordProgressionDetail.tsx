import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Image, Button, Stack } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../api/constants';
import {jwtGet} from "../api/client";
import { hookTheory } from "../api/hooktheory";
import { Console } from "console";
import "./ChordProgressionDetail.css"


type songAPI = {
  artist: string,
  song: string, 
  section: string
  url: string
}

  export const ChordProgressionDetail: React.FC = () => {
    const { id } = useParams()
    const [relatedSongs, setRelatedSongs] = useState<songAPI[]  | null | undefined>(null);
    const [chordProgression, setChordProgression] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate(); 

    useEffect(() => {
      async function getChordProgression() {
        try {
          setIsLoading(true)
          const response = await jwtGet(`chordProgression/${id}`);
          
          setChordProgression(response.data)
          setIsLoading(false)
          
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



    useEffect(() => {
      if (chordProgression){
      async function getData() {
        const data = await hookTheory(chordProgression.chordDegrees);
        const displayedData = data.slice(0,4)
        setRelatedSongs(displayedData);
      }
      getData();
    };

    }, [chordProgression])


    const nextPage = () => {
      let path = `/chordprogressions`; 
      navigate(path);
      };
    


    
      
    return (
      <>
        <Container>
          <Row className="mt-5">
            <Col style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "space-between" }}>
              {chords &&
                chords.map((chord, index) => (
                  <div key={index}>
                    <Image height="200px" width="250px" src={`/chords/${chord.pitch}${!!chord.sharp ? 'Sharp' : ''}_${chord.chordQuality}.png`} thumbnail />
                    <p>{chord.pitch}{chord.sharp ? '#' : ''} {chord.chordQuality}</p>
                  </div>
                ))
              }
            </Col>
          </Row>
        </Container>
        <Stack className="align-items-center text-align-center">
        { chords && 
          (<><h3 className="mt-5">Key: {chordProgression.scale.key.pitch}</h3>
          <h3 className="mt-2">Style: {chordProgression.style}</h3>
          <h5 className="mt-5">Songs that utilize this chord progression:</h5>
          <div>
            {relatedSongs ? relatedSongs.map(song => {
            return <ol>{song.song} by {song.artist} in the {song.section}</ol>;
          }) : null}</div>
        </>
        )
      }   
      </Stack>
      <Button variant="success" size="lg" onClick={nextPage}>
          Return
      </Button>
      </>
    );
  };