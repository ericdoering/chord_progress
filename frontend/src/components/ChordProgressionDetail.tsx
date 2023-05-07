import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Image, Button, Stack } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import {jwtGet} from "../api/client";
import { hookTheory } from "../api/hooktheory";
import "./ChordProgressionDetail.css"
import { AxiosResponse } from "axios";


type songAPI = {
  artist: string,
  song: string, 
  section: string
  url: string
}

type chord = {
  pitch: string,
  sharp: boolean,
  chordQuality: string
}

type Key = {
  pitch: string,
  sharp: boolean,
}

type scale = {
  chords: chord[]
  key: Key
  pitch: string
}

type progressionDetails = {
  chordDegrees: number[],
  scale: scale
  style: string
}


  export const ChordProgressionDetail: React.FC = () => {
    const { id } = useParams()
    const [relatedSongs, setRelatedSongs] = useState<songAPI[]  | null | undefined>(null);
    const [chordProgression, setChordProgression] = useState<progressionDetails | null >(null);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate(); 

    useEffect(() => {
      async function getChordProgression() {
        try {
          setIsLoading(true)
          const response : AxiosResponse = await jwtGet(`chordProgression/${id}`);
          
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
      if (chordProgression) {
      async function getData() {
        if (!chordProgression) return;
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
        { chords && chordProgression && (
            <>
              <h3 className="mt-5">Key: {chordProgression.scale.key.pitch}{chordProgression.scale.key.sharp ? '#': ''}</h3>
                <h3 className="mt-2">Style: {chordProgression.style}</h3>
                  <h5 className="mt-5 mb-4"><u>Songs that utilize this chord progression:</u></h5>
                    <div>
                  {relatedSongs ? relatedSongs.map(song => {
                  return <ol><small>"{song.song}" by {song.artist} in the {song.section}</small></ol>;
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