import { useState, useEffect } from "react";
import { Stack, Image, Button } from "react-bootstrap";
import image from "../assets/Chord_Progress_Logo.png";
import "./Home.css";
import useSound from "use-sound";
import homeSound from "../assets/audio/HomeSound.mp3";
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  loggedIn: boolean
}


function Home(props:HomeProps){
  // Passing the user's loggedIn boolean as a prop
    const { loggedIn } = props
    let navigate = useNavigate(); 
    // Setting two redirection routes
    let pathRegister = `/register`;
    let pathLogin = `/login`;
    // Nameing 3 specific stylings that will change at different points
    const [showStack, setShowStack] = useState<boolean>(false);
    const [pulse, setPulse] = useState<boolean>(false);
    const [showText, setShowText] = useState<boolean>(false);
    // Setting state for useSound hook in state
    const [playbackRate, setPlaybackRate] = useState(1);
   
    // Setting up the useSound hook
    const [play] = useSound(homeSound, {
      playbackRate,
      interrupt: true,
    });
    let clicked = true

    // A useEffect hook that will animate logo when pulse is changed
    useEffect(() => {
      const timeout = setTimeout(() => {
        setPulse(false);
      }, 10000);
      return () => clearTimeout(timeout);
    }, [pulse]);

    // A useEffect hook that will delay text from showing once the logo is clicked
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showText) {
          timeout = setTimeout(() => {
          }, 11000);
        }
        return () => clearTimeout(timeout);
      }, [showText]);


    // Initiating various functions once the logo is clicked
    // Once the logo is clicked, sound will play, the buttons will appear, then one line of text, then the final line of text
    const handleImageClick = () => {
      setShowText(true);
      setShowStack(true);
      setPulse(true);
      setPlaybackRate(playbackRate);
      play();
      clicked = false;
    };

    // Setting the useNaviate hook to bring the user to the appropriate link depending on which button is clicked
    const handleRegisterClick = () => {
        navigate(pathRegister)
    }

    const handleLoginClick = () => {
        navigate(pathLogin)
    }


    // Based on if the user is logged in, we will display appropriate information 
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