import { useState, useEffect } from "react";
import { Stack, Image, Card, Button } from "react-bootstrap";
import image from "../assets/Chord_Progress_Logo.png";
import "./Home.css";
import useSound from "use-sound";
import homeSound from "../assets/audio/HomeSound.mp3";


function Home(){
    const [showStack, setShowStack] = useState<boolean>(false);
    const [pulse, setPulse] = useState<boolean>(false);
    const [showText, setShowText] = useState<boolean>(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [play] = useSound(homeSound, {
      playbackRate,
      // `interrupt` ensures that if the sound starts again before it's
      // ended, it will truncate it. Otherwise, the sound can overlap.
      interrupt: true,
    });
    let clicked = true

    useEffect(() => {
      const timeout = setTimeout(() => {
        setPulse(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }, [pulse]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showText) {
          timeout = setTimeout(() => {
            // Don't set showText to false
          }, 11000); // Show text after 11 seconds
        }
        return () => clearTimeout(timeout);
      }, [showText]);


    const handleImageClick = () => {
    setShowText(true);
    setShowStack(true);
      setPulse(true);
      setPlaybackRate(playbackRate);
      play();
      clicked = false;
    };
    return (
        <>
        <Stack className="align-items-center bold">
            <h1 className="m-4">WELCOME TO</h1>
            <Image onClick={handleImageClick} className={pulse ? 'pulse' : ''} src={image} height="300px" width="300px" alt="Logo" rounded></Image>
            {pulse ? null : <h6>(click me)</h6>}
            <h3 className="mt-5">THE CHORD PROGRESSION LEARNING TOOL AND GENERATOR</h3>
            <Stack className={`fade-in ${showStack ? 'show' : ''}`}>
                <Button className="m-2" variant="success" size="lg" >Register</Button>
                <Button className="m-2" variant="success" size="lg" >Login</Button>
            </Stack>
            <Stack className={`text-in ${showText ? 'show' : ''}`}>
                <h1>This Text will then appear</h1>
            </Stack>
            </Stack>
        </>
    )
}

export default Home;