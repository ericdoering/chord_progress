import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


interface DisplayProps {
    imageUrls: string[];
    imageCaptions: string[];
  }

  export const ChordProgressionDetail: React.FC<DisplayProps> = ({ imageUrls, imageCaptions }) => {
    let navigate = useNavigate(); 
    const nextPage = () => {
      let path = `/chordprogressions`; 
      navigate(path);
      };

    return (
      <>
      <Container>
        <Row>
          {imageUrls.map((url, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Image src={url} rounded fluid />
              <p>{imageCaptions[index]}</p>
            </Col>
          ))}
        </Row>
        <h2>Key: E</h2>
        <h2>Style: Blues</h2>
        <h3>Songs that utilize this chord progression</h3>
      </Container>
      <Button onClick={nextPage}>
          Return
      </Button>
      </>
    );
  };