import { useState, useEffect } from "react"
import useSound from 'use-sound';
import { Card, Button, Alert } from "react-bootstrap"
import Beatles from "../assets/Beatles.png";
import Whitney from "../assets/Whitney.png"
import keyOfC from "../assets/keyOfC.png"
import progressionExample from "../assets/audio/progressionExample.mp4"

type UseDisplayTextReturnType = [string, () => void];

function useDisplayText(duration = 500): UseDisplayTextReturnType {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (showText) {
      const timeoutId = setTimeout(() => {
        setShowText(false);
        setDisplayText('Listen ...');
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [duration, showText]);

  return [displayText, () => setShowText(true)];
}


function About(){
    /////////////////
    const [displayText, showText] = useDisplayText();
    /////////////////

    const [playbackRate, setPlaybackRate] = useState(1);
    const [play] = useSound(progressionExample, {
      playbackRate,
      // `interrupt` ensures that if the sound starts again before it's
      // ended, it will truncate it. Otherwise, the sound can overlap.
      interrupt: true,
    });
  
    const handleClick = () => {
    showText()
      setPlaybackRate(playbackRate);
      play();
    };

    return (
        <>
            <h1>Welcome to Chord Progress</h1>
                <Card className="border d-flex align-items-center justify-content-center">
                <Card.Img variant="top" src={Beatles} style={{ width: "40rem", height: "20rem" }} />
                <Card.Body>
                    <Card.Title>What is a chord?</Card.Title>
                    <Card.Text>
                    A chord is a combination of three or more notes played simultaneously in music. 
                    It's like a small cluster of sounds that creates a musical sound. 
                    These notes can be played on different instruments or by different voices, 
                    and they can be arranged in various ways to create different moods and emotions in music. 
                    Chords are often used as building blocks in music composition, 
                    and they provide a sense of stability and directionality to a piece of music. 
                    They can be major, minor, augmented, diminished, or other variations depending on the 
                    combination of notes played together. For example a major chord will produce a happy, cheerful type of 
                    sound while a minor chord will produce a sad or darker type of sound. 
                    Chords are an essential component of music, and understanding them is critical to appreciating and creating music.
                    </Card.Text>
                </Card.Body>
                </Card>
                <hr></hr>
                <Card className="border d-flex align-items-center justify-content-center">
                <Card.Img variant="top" src={Whitney} style={{ width: "35rem", height: "20rem" }} />
                <Card.Body>
                    <Card.Title>What is a chord progression?</Card.Title>
                    <Card.Text>
                    So chords as we have read are a combination of notes. Imagine now that chord progressions
                    are the next step in which we now combine the chords
                    A chord progression is a sequence of chords played one after another in a piece of music. 
                    Think of it as a series of chords that create a musical story, 
                    moving the listener from one musical moment to another. 
                    Chord progressions are a fundamental element of music, and they are used in almost every song you hear. 
                    They can be simple or complex, repetitive or varied, and they can evoke a range of emotions and moods. 
                    Understanding chord progressions is essential for songwriters and musicians, 
                    as they provide a framework for creating melodies, harmonies, and lyrics that fit together seamlessly. 
                    A good chord progression can make a song memorable, 
                    while a poorly constructed one can make a song feel dull or uninspired.
                    </Card.Text>
                </Card.Body>
                </Card>
                <hr></hr>
                <Card className="border d-flex align-items-center justify-content-center">
                <Card.Img variant="top" src={keyOfC} style={{ width: "60rem", height: "20rem" }} />
                <Card.Body>
                    <Card.Title>How to we build a chord progression?</Card.Title>
                    <Card.Text>
                    Let's take a look at this diagram above to get an idea of how we can construct a chord progression.
                    As you see highlighted on the left, we have a musical key. In this case we will use the key of "C".
                    Highlighted on the top is the "Scale". For this app we are using the "diatonic major scale" to base our
                    chord progressions off of. There are several scales to build chord progressions around. This app uses
                    the major scale due to the fact that it is what most modern westen music is based around. For the major scale
                    we have 8 scale degrees and they are all numbered in succession. For the time being you can ignore why for instance
                    D minor happens to be the "2" chord or why F Major is the "4" chord. Essentially we can pull together any combination
                    of these chords in the scale to create any chord progression we want.
                    So, in this case if I say "Play a 2-5-1 progression in the key of C", we can see see that 2 in this scale would
                    be the D minor chord, 5 in this scale would be the G Major chord, and 1 would be the C Major chord. If we were
                    to pick up an instrument and play D minor, G Major, and C Major we would then be playing that chord progression!
                    </Card.Text>
                </Card.Body>
                </Card>
                <div>
                <Button className="lg d-flex align-items-center justify-content-center" variant="outline-danger" onClick={handleClick}> Listen to the 2-5-1 progression in "C" 🎸 </Button>
                {displayText && <p><Alert variant="success">{displayText}</Alert></p>}
                </div>
            </>
      );
};

export default About;