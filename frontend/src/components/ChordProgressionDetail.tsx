import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Image, Button, Stack } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../api/constants';
import {jwtGet} from "../api/client";
import { hookTheory } from "../api/hooktheory";


  export const ChordProgressionDetail: React.FC = () => {
    const { id } = useParams()
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



    const nextPage = () => {
      let path = `/chordprogressions`; 
      navigate(path);
      };

      type ChordProgression = {
        chordDegrees?:[]
        scale?:{}
        style?: string;
        }

    function songsWithChords<ChordProgression>() {
      // console.log(chordProgression?.scaleDegrees)
    };

    songsWithChords();

    

      
    return (
      <>
      <Container>
          {chords && chords.map((chord, index) => (
              <Stack direction="horizontal" gap={3} key={index}>
              <Image key={index} height="200px" width="250px" src={`/chords/${chord.pitch}${!!chord.sharp ? 'Sharp' : ''}_${chord.chordQuality}.png`} thumbnail />
              <p>{chord.pitch}{chord.sharp ? '#' : ''} {chord.chordQuality}</p>
              </Stack>
          ))}
        { chords && 
        (<><h2>Key: {chordProgression.scale.key.pitch}</h2>
        <h2>Style: {chordProgression.style}</h2>
        <h3>Songs that utilize this chord progression:</h3>


        </>
        )
  }   
      </Container>
      <Button variant="success" size="lg" onClick={nextPage}>
          Return
      </Button>
      </>
    );
  };