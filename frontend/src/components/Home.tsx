import { useState, useEffect } from "react";
import { Stack, Image, Button } from "react-bootstrap";
import image from "../assets/Chord_Progress_Logo.png";
import "./Home.css";
import useSound from "use-sound";
import homeSound from "../assets/audio/HomeSound.mp3";
import { useNavigate } from 'react-router-dom';


function Home(props:boolean){
    const { loggedIn } = props
    let navigate = useNavigate(); 
    let pathRegister = `/register`;
    let pathLogin = `/login`;
    const [showStack, setShowStack] = useState<boolean>(false);
    const [pulse, setPulse] = useState<boolean>(false);
    const [showText, setShowText] = useState<boolean>(false);
    const [playbackRate, setPlaybackRate] = useState(1);
   
    const [play] = useSound(homeSound, {
      playbackRate,
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
          }, 11000);
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

    const handleRegisterClick = () => {
        navigate(pathRegister)
    }

    const handleLoginClick = () => {
        navigate(pathLogin)
    }


    return (
        <>
        <Stack className="align-items-center bold text-align-center">
            <h1 className="mb-4">WELCOME TO</h1>
            <Image onClick={handleImageClick} className={pulse ? 'pulse' : ''} src={image} height="250px" width="250px" alt="Logo" rounded></Image>
            {pulse ? null : <h6>(click)</h6>}
            <h3 className="mt-4">THE CHORD PROGRESSION LEARNING TOOL AND GENERATOR</h3>
            {!loggedIn && <>
            <Stack className={`fade-in ${showStack ? 'show' : ''}`}>
                <Button onClick={handleRegisterClick} className="m-2" variant="success" size="lg" >Register</Button>
                <Button onClick={handleLoginClick} className="m-2" variant="success" size="lg" >Login</Button>
            </Stack>
            <Stack className={`text-in ${showText ? 'show' : ''} align-items-center`}>
                <h4 className="text-muted m-3">New to music theory and chord progressions?</h4>
            </Stack>
            <Stack className={`final-in ${showText ? 'show' : ''} align-items-center`}>
                <h5 className="text-muted m-2">No problem! Register an account and we will help you get started!</h5>
            </Stack>
            </>}
        </Stack>
        </>
    )
}

export default Home;