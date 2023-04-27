import { useState } from "react";
import useSound from 'use-sound';
import { Card, Button, Stack, Col, ListGroup, Row, Tab } from "react-bootstrap";
import Beatles from "../assets/Beatles.png";
import Whitney from "../assets/Whitney.png";
import keyOfC from "../assets/keyOfC.png";
import playingGuitar from "../assets/playing_guitar.png"
import keys from "../assets/keys.png"
import genres from "../assets/genres.png"
import progressionExample from "../assets/audio/progressionExample.mp3";
import { useDisplayText } from "../../utilities/loading";
import "./About.css"


function About(){
    const [showStack, setShowStack] = useState<boolean>(false);
    const [displayText, showText] = useDisplayText();
    const [playbackRate, setPlaybackRate] = useState(1);
    const [play] = useSound(progressionExample, {
      playbackRate,
      interrupt: true,
    });
  
    const handleClick = () => {
    setShowStack(true);
    showText();
    setPlaybackRate(playbackRate);
    play();
    };

    return (
        <>
            <h1>Welcome to Chord Progress</h1>
                <Card className="border d-flex align-items-center justify-content-center">
                <Card.Img className="mt-4" variant="top" src={Beatles} style={{ width: "40rem", height: "20rem" }}/>
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
                <Card.Img className="mt-4" variant="top" src={Whitney} style={{ width: "35rem", height: "20rem" }} />
                <Card.Body>
                    <Card.Title>What is a chord progression?</Card.Title>
                    <Card.Text>
                    So chords as we have read are a combination of notes. Imagine now that chord progressions
                    are the next step in which we now combine the chords.
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
                <Card.Img className="mt-4" variant="top" src={keyOfC} style={{ width: "60rem", height: "20rem" }} />
                <Card.Body>
                    <Card.Title>How do we build a chord progression?</Card.Title>
                    <Card.Text>
                    Let's take a look at this diagram above to get an idea of how we can construct a chord progression.
                    As you see highlighted on the left, we have a musical key. In this case we will use the key of "C".
                    Highlighted on the top is the "Scale". For this app we are using the "diatonic major scale" to base our
                    chord progressions off of. There are several scales to build chord progressions around. This app uses
                    the major scale due to the fact that it is what most modern westen music is based around. For the major scale
                    we have 8 scale degrees and they are all numbered in succession. For the time being you can ignore why for instance
                    D minor happens to be the "2" chord or why F Major is the "4" chord. Essentially we can pull together any combination
                    of these chords in the scale to create any chord progression we want.
                    So, in this case if we say "Play a 2-5-1 progression in the key of C", we can see see that 2 in this scale would
                    be the D minor chord, 5 in this scale would be the G Major chord, and 1 would be the C Major chord. If we were
                    to pick up an instrument and play D minor, G Major, and C Major we would then be playing that chord progression!
                    </Card.Text>
                </Card.Body>
                </Card>
                <Stack className="d-flex flex-column align-items-center">
                <h5 className="mt-4">Let's hear what that chord progression sounds like on an acoustic guitar...</h5>
                <Button className="text-center m-5" variant="success sm" onClick={handleClick}> Listen to the 2-5-1 progression in "C"</Button>
                <div className={`fade-in ${showStack ? 'show' : ''}`}>
                    {displayText && <Card.Img className="mt-4 rounded" variant="top" src={playingGuitar} style={{ width: "15rem", height: "10rem" }} />}
                </div>
                <hr></hr>
                <h2 className="m-5">How can you use this app to build chord progressions?</h2>
                </Stack>
                <hr></hr>
                <Card className="border d-flex align-items-center justify-content-center">
                <Card.Img className="mt-4" variant="top" src={keys} style={{ width: "13rem", height: "25rem" }} />
                <Card.Body>
                    <Card.Title>Begin by selecting a musical key.</Card.Title>
                    <Card.Text>
                    In music, as we discussed, we use something called "keys" to help organize the sounds we hear. Think of keys like colors that we make music with. 
                    In western music we have twelve different colors, or keys, that we can use. 
                    The twelve musical keys are named after the first note in each key's set of sounds. 
                    These notes are the letters A through G, and they also have a sharp (#) or flat (b) symbol to indicate a slightly higher or lower pitch.
                    Not every key has a sharp or flat
                    The twelve keys are: A, A#/Bb, B, C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab. When we play music in a certain key, we are using a specific set of sounds that are associated with that key. 
                    This helps create a consistent and cohesive sound throughout the music.
                    Here is a look at how you can select your key for your chord progression.
                    </Card.Text>
                </Card.Body>
                </Card>
                <hr></hr>
                <Card className="border d-flex align-items-center justify-content-center">
                <Card.Img className="mt-4" variant="top" src={genres} style={{ width: "15rem", height: "15rem" }} />
                <Card.Body>
                    <Card.Title>Then, select the genre or style of your progression.</Card.Title>
                    <Card.Text>
                    Certain genres of music, such as jazz, pop, soul, rock, etc. have common chord progressions that are frequently used in their compositions. 
                    These progressions provide a familiar harmonic structure that listeners can recognize and appreciate.
                    For example, jazz music often uses a chord progression known as "2-5-1." (The 2-5-1 was the progression
                    seen in the slide above). To review,
                    this progression refered to the chords played in a specific order: 
                    first the second chord of the scale was played, then the fifth chord was played, and finally the first chord. 
                    In the key of C, the 2-5-1 progression would be D minor - G Major - C Major. 
                    This progression is common in jazz music because it creates a sense of tension and resolution that is pleasing to the ear and is indicative of the genre.
                    Other genres of music have their own common chord progressions as well. 
                    For example, rock and blues music often uses the "I-IV-V" progression, 
                    which refers to the chords played in a specific order: the first, fourth, and fifth chords of the scale. 
                    In the key of C, the I-IV-V progression would be C-F-G. 
                    This progression is popular in rock music because it provides a strong, driving rhythm that is easy to play and sing along to.
                    Currently there are 3 genres to select from. More genres and styles to be added soon!
                    </Card.Text>
                </Card.Body>
                </Card>
                <hr></hr>
                <h4 className="m-5">Here are some additional resources if you would like further explaination on chord progressions
                or would like to dive deeper into this topic...</h4>
                <Card>
                    <Card.Body>
                    <Card.Title>Additional Resources</Card.Title>
                    <Card.Text>
                    <Tab.Container defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item variant="success" action href="#link1">
                            "How Chord Progressions Work" by Pierce Portfield
                            </ListGroup.Item>
                            <ListGroup.Item variant="success" action href="#link2">
                            "Chord Progressions 101: How to Arrange Chords in Your Songwriting"
                            by Landr
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                            <div className="d-flex flex-column">
                                <p>
                                    A brief 3:41 minute video that nicely explains how chord progressions are made.
                                    Pierce also explains some other important aspects of music theory such as the circle of 
                                    fifths and chords "function" within a chord progression.
                                    </p>
                                    <a href="https://www.youtube.com/watch?v=fCNuaubi95Q&ab_channel=PiercePorterfield" target="_blank">
                                        <Button variant="success">Go</Button>
                                    </a>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                            <div className="d-flex flex-column">
                                <p>
                                    A written article that provides further context into how chord progressions are built 
                                    along with other details such as why we often describe chord progressions with roman numerals, progressions
                                    based on different scales, etc.
                                </p>
                                <a href="https://blog.landr.com/chord-progressions/" target="_blank">
                                        <Button variant="success">Go</Button>
                                </a>   
                            </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </>
            );
        };

export default About;